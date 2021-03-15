/* eslint-disable react/jsx-key */

import { IoCaretDown, IoCaretUpOutline } from 'react-icons/io5'
import { useTable, useSortBy } from 'react-table'
import { Link } from 'wouter'
import { Center, TableStyles, TableHeaderSection, TableRow, TableBody, TableData, TableHeader, TableRowHeader } from './styles'

export const Table = ({ columns, data }) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow
  } = useTable({
    columns,
    data,
    initialState: {
      hiddenColumns: columns
        .filter(col => col.show === false)
        .map(col => col.accessor)
    }
  }, useSortBy)

  return (
    <>
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
                {row.cells.map((cell, idx) => {
                  const { trackId } = row.cells[i].row.values
                  return (
                    <Link key={idx} href={`/detail/${trackId}`}>
                      <TableData
                        minWidth={cell.column.minWidth}
                        index={cell.column.id}
                        {...cell.getCellProps()}
                      >
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
    </>
  )
}
