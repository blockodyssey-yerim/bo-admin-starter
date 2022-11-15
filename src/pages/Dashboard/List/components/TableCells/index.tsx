import { useLocation } from 'react-router-dom';

import { Link, TableCell, Typography } from '@mui/material';

import { LinkButton } from 'components/Buttons';
import { ITable } from 'pages/Dashboard/List/components/TableCells/types';

function TableCells({ row }: ITable) {
    const { search } = useLocation();

    return (
        <>
            <TableCell align="center">
                {row.name ? (
                    <Link href={`/detail/${row.idx}${search}`}>
                        <Typography variant="underlined">{row.name}</Typography>
                    </Link>
                ) : (
                    '-'
                )}
            </TableCell>
            <TableCell align="center">{row.calories || '-'}</TableCell>
            <TableCell align="center">{row.fat || '-'}</TableCell>
            <TableCell align="center">{row.carbs || '-'}</TableCell>
            <TableCell align="center">{row.protein || '-'}</TableCell>
            <TableCell align="center">
                <LinkButton variant="contained" size="small" text="수정" path={`/edit/${row.idx}`} />
            </TableCell>
        </>
    );
}

export default TableCells;
