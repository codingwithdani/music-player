/* eslint-disable react/jsx-key */

import { useTable, useSortBy } from 'react-table'
import { Center, TableStyles, TableHeaderSection, TableRow, TableBody, TableData, TableHeader, TableRowHeader } from './styles'
import { IoCaretDown, IoCaretUpOutline } from 'react-icons/io5'
import { Link } from 'wouter'

export const Table = ({ columns, data }) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow
  } = useTable({
    columns,
    data
  }, useSortBy)

  return (
    <TableStyles {...getTableProps()}>
      <TableHeaderSection>
        {headerGroups.map(headerGroup => (
          <TableRowHeader {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <TableHeader color={column.color} {...column.getHeaderProps(column.getSortByToggleProps())}>
                <Center>
                  {column.render('Header')}
                  <span>
                    {column.isSorted
                      ? column.isSortedDesc
                        ? <IoCaretDown />
                        : <IoCaretUpOutline />
                      : ''}
                  </span>
                </Center>
              </TableHeader>
            ))}
          </TableRowHeader>
        ))}
      </TableHeaderSection>
      <TableBody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row)
          return (
            <TableRow {...row.getRowProps()}>
              {row.cells.map(cell => {
                const { trackId } = row.cells[i].row.values
                return (
                  <Link href={`/detail/${trackId}`}>
                    <TableData index={cell.column.id} {...cell.getCellProps()}>
                      {cell.render('Cell', row.cells[i].row.values)}
                    </TableData>
                  </Link>
                )
              })}
            </TableRow>
          )
        })}
      </TableBody>
    </TableStyles>
  )
}
