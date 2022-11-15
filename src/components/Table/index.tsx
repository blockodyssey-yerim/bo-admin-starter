import React from 'react';

import { SelectChangeEvent, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

import { SearchType, setSearchFilters } from 'slices/searchSlice';

import { useAppDispatch, useAppSelector } from 'hooks/redux';
import { useSearch } from 'hooks/search';

import { TableLoader, Pagination } from 'components';
import { StyledTablePaper } from 'components/Table/styles';
import { ITable } from 'components/Table/types';
import DashboardData from 'pages/Dashboard/List/components/TableCells';

import { HEAD_CELL } from 'configs/table';

function SearchTable({ isLoading, data = [], total = 0 }: ITable) {
    const dispatch = useAppDispatch();
    const { page, pageSize } = useAppSelector((state) => state.search);
    const { page: menu } = useAppSelector((state) => state.menu);

    const handleSearch = useSearch({ menu });

    const handlePage = (paging: SearchType) => {
        dispatch(setSearchFilters(paging));
        handleSearch(paging);
    };

    const onPageChange = (newPage: number) => handlePage({ page: newPage, pageSize });

    const onRowsPerPageChange = (event: SelectChangeEvent<unknown>) =>
        handlePage({ page: 1, pageSize: event.target.value as number });

    return (
        <StyledTablePaper>
            <TableContainer>
                <Table
                    size="medium"
                    aria-label={`${menu.toLowerCase()} table`}
                    aria-labelledby={`${menu.toLowerCase()}Table`}
                >
                    <TableHead>
                        <TableRow>
                            {HEAD_CELL[menu as keyof typeof HEAD_CELL]?.map(({ id, label }) => (
                                <TableCell key={id} align="center">
                                    {label}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {isLoading ? (
                            <TableLoader colSpan={9} />
                        ) : total === 0 ? (
                            <TableLoader type="empty" colSpan={9} />
                        ) : (
                            data.map((row, index) => (
                                <React.Fragment key={index}>
                                    {menu === 'Dashboard' && (
                                        <TableRow hover tabIndex={-1}>
                                            <DashboardData row={row} />
                                        </TableRow>
                                    )}
                                </React.Fragment>
                            ))
                        )}
                    </TableBody>
                </Table>
            </TableContainer>
            {!isLoading && total > 0 && (
                <Pagination
                    count={total}
                    page={page > 0 ? page - 1 : 0}
                    rowsPerPage={pageSize || 10}
                    onPageChange={onPageChange}
                    onRowsPerPageChange={onRowsPerPageChange}
                />
            )}
        </StyledTablePaper>
    );
}

export default SearchTable;
