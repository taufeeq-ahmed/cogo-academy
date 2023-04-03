import React from 'react'
import { EditorData as DataDiv } from '../../theme/html_render'

const EditorData = ({ headers, data, loading, error }) => {
  return (
    <>
      <h2 className="text-lg font-medium mb-2 border-b">Data</h2>
      <DataDiv>
        {loading ? (
          <p>Loading...</p>
        ) : error !== null ? (
          <p className="text-sm text-red-700">{error}</p>
        ) : (
          <table className="min-w-full divide-y divide-gray-300 table-auto">
            <thead className="bg-gray-50">
              <tr>
                {headers.map((h, idx) => (
                  <th
                    key={idx}
                    scope="col"
                    className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6 capitalize"
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              {data.map((d, idx) => (
                <tr key={idx}>
                  {headers.map((h) => (
                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                      {d[h]}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </DataDiv>
    </>
  )
}

export default EditorData;
