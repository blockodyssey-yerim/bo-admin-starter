import { SelectChangeEvent } from '@mui/material';

export interface IPagination {
    count: number;
    page: number;
    rowsPerPage: number;
    onPageChange: (value: number) => void;
    onRowsPerPageChange: (event: SelectChangeEvent<unknown>) => void;
}
