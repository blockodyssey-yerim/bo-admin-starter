import { Grid, Pagination, Select } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledPaginationContainer = styled(Grid)(() => ({
    minHeight: 52,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    columnGap: 20,

    '& > div:first-of-type': {
        marginLeft: -120,
        alignItems: 'center',
        columnGap: 10
    }
}));

export const StyledSelect = styled(Select)(() => ({
    '&&&& *': { border: 0, borderColor: 'unset' },
    '& > div': { p: 0 }
}));

export const StyledPagination = styled(Pagination)(() => ({
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
}));
