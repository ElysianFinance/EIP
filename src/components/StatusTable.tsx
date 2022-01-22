import { Link } from 'gatsby'
import React from 'react'
import { MarkdownRemark } from '../../types/gql'
import { AuthorList } from './AuthorList'

interface Props {
  rows: Partial<MarkdownRemark>[]
}

const StatusTable: React.FC<Props> = ({ rows }) => {
  return (
    <table className="eiptable">
      <thead>
        <tr>
          <th className="eipnum">Number</th>
          <th className="title w-2/3">Title</th>
          <th className="author w-1/3">Author</th>
        </tr>
      </thead>

      <tbody>
        {rows.map((row) => (
          <tr key={row.id}>
            <td className="eipnum">
              {row.frontmatter.eip ? (
                <a href={`/eips/eip-${row.frontmatter.eip}`}>
                  {row.frontmatter.eip}
                </a>
              ) : (
                <a href={`/eccp/eccp-${row.frontmatter.eccp}`}>
                  {row.frontmatter.eccp}
                </a>
              )}
            </td>
            <td className="title">{row.frontmatter.title}</td>
            <td className="author">
              <AuthorList author={row.frontmatter.author} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export { StatusTable }
