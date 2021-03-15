import styled from 'styled-components'

export const TableStyles = styled.table`
    border-collapse: collapse;
`

export const TableHeaderSection = styled.thead`

`
export const TableHeader = styled.th`
    color: ${props => props.color === 'orange' ? '#ff5018' : '#71787e'};
    font-weight: 500;
    padding-bottom: 16px;
    text-align: initial;
`

export const TableRow = styled.tr`
    height: 90px;

    &:hover {
        background: #000;
        cursor: pointer
    }

`
export const TableRowHeader = styled.tr``

export const TableData = styled.td`
    color: ${props => props.index === 'trackName' ? '#ff5018' : '#ffffff'};
    min-width: ${props => props.minWidth ? '80px' : '60px'};
    border-spacing: 0;
    padding: 0;
    border-spacing: 0;
    padding: 0 4px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    max-width: 100px;
`

export const TableBody = styled.tbody`

`

export const Center = styled.div`
    display: flex;
    align-content: center;
`
