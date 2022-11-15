import React from 'react';

import { Grid, MenuItem, Typography } from '@mui/material';

import { StyledPagination, StyledPaginationContainer, StyledSelect } from 'components/Pagination/styles';
import { IPagination } from 'components/Pagination/types';

function Pagination({ count, page, rowsPerPage, onPageChange, onRowsPerPageChange }: IPagination) {
    const totalCount = Math.ceil(count / rowsPerPage);

    const onChange = (_event: React.ChangeEvent<unknown>, page: number) => onPageChange(page);

    return (
        <StyledPaginationContainer container>
            <Grid item xs="auto" container>
                <Typography component="p" variant="body2">
                    페이지 당 행:
                </Typography>
                <StyledSelect id="rows per page" label="" value={rowsPerPage} onChange={onRowsPerPageChange}>
                    <MenuItem value={10}>10</MenuItem>
                    <MenuItem value={20}>20</MenuItem>
                    <MenuItem value={50}>50</MenuItem>
                    <MenuItem value={100}>100</MenuItem>
                </StyledSelect>
            </Grid>
            <Grid item xs="auto">
                <StyledPagination
                    color="primary"
                    shape="rounded"
                    variant="outlined"
                    showFirstButton
                    showLastButton
                    count={totalCount}
                    page={page + 1} // 1부터 시작
                    onChange={onChange}
                />
            </Grid>
        </StyledPaginationContainer>
    );
}

export default Pagination;
