import styled from 'styled-components'

export const TableStyles = styled.table`
    padding: 30px;
`

export const TableHeaderSection = styled.thead`

`
export const TableHeader = styled.th`
    color: ${props => props.color === 'orange' ? '#ff5018' : '#71787e'};
    min-width: 50px;
    font-weight: 500;
    text-align: initial;
    padding-right: 30px;
`

export const TableRow = styled.tr`
    min-width: 100px;
    height: 50px;

`
export const TableRowHeader = styled.tr`

`

export const TableData = styled.td`
    color: ${props => props.index === 'trackName' ? '#ff5018' : '#ffffff'};
`

export const TableBody = styled.tbody`

`

export const Center = styled.div`
    display: flex;
    place-content: center;
`
