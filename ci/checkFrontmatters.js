const Yup = require('yup')
const glob = require('glob')
const fm = require('front-matter')
const statuses = require('./statuses')
const fs = require('fs/promises')
const { promisify } = require('util')
const g = promisify(glob)

const snapshotIdRegex = /^https?:\/\/(snapshot.org).*\/([A-z0-9]{7,})$/

const commonValidationSchema = Yup.object().shape({
  file: Yup.string().required(),
  title: Yup.string().required(),
  type: Yup.string().oneOf(['Meta-Governance', 'Governance']).required(),
  proposal: Yup.string().matches(snapshotIdRegex),
  status: Yup.string().oneOf(statuses),
  author: Yup.string().required(),
  network: Yup.string()
    .oneOf(['Ethereum', 'Optimism', 'Ethereum & Optimism'])
    .required(),
  implementor: Yup.string().nullable(),
  release: Yup.string().nullable(),
  created: Yup.date().nullable(),
  updated: Yup.date().nullable(),
  requires: Yup.mixed().nullable(),
  'discussions-to': Yup.string().nullable(),
})

const eipValidationSchema = commonValidationSchema
  .concat(
    Yup.object().shape({
      eip: Yup.number().required(),
      network: Yup.string().required(),
    }),
  )
  .noUnknown()
  .strict()

const eccpValidationSchema = commonValidationSchema
  .concat(
    Yup.object().shape({
      eccp: Yup.number().required(),
    }),
  )
  .noUnknown()
  .strict()

;(async () => {
  try {
    const eips = await g('./content/eips/*.md')
    const eccp = await g('./content/eccp/*.md')

    // EIP
    await Promise.all(
      eips.map(async (file) => {
        const content = await fs.readFile(file, 'utf-8')
        const { attributes } = fm(content)
        const castValues = eipValidationSchema.cast({ file, ...attributes })
        return await eipValidationSchema.validate(castValues)
      }),
    )
    // ECCP
    await Promise.all(
      eccp.map(async (file) => {
        const content = await fs.readFile(file, 'utf-8')
        const { attributes } = fm(content)
        const castValues = eccpValidationSchema.cast({ file, ...attributes })
        return await eccpValidationSchema.validate(castValues)
      }),
    )
  } catch (error) {
    console.log(error)
    console.error({
      value: error.value,
      errors: error.errors,
    })
    process.exit(1)
  }
})()
