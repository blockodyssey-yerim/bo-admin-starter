import { TableRow, TableCell, CircularProgress } from '@mui/material';

import { StyledTableLoader } from 'components/TableLoader/styles';
import { ITableLoader } from 'components/TableLoader/types';

function TableLoader({ text = '', type = 'loading', colSpan = 10 }: ITableLoader) {
    return type === 'loading' ? (
        <TableRow>
            <TableCell align="center" colSpan={colSpan}>
                <StyledTableLoader component="div" variant="body2">
                    <CircularProgress size={12} color="primary" /> 데이터를 불러오는 중입니다.
                </StyledTableLoader>
            </TableCell>
        </TableRow>
    ) : (
        <TableRow>
            <TableCell align="center" colSpan={colSpan}>
                <StyledTableLoader component="div" variant="body2">
                    {text ? text : '조회된 데이터가 없습니다.'}
                </StyledTableLoader>
            </TableCell>
        </TableRow>
    );
}

export default TableLoader;
