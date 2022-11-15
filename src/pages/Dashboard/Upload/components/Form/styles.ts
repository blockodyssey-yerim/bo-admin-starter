import { Box, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledContainer = styled(Box)(() => ({
    '& h4': {
        marginBottom: 15
    },
    '& > div:last-of-type': {
        display: 'grid',
        gridTemplateColumns: '150px 1fr'
    }
}));

export const StyledCategoryContainer = styled(Grid)(() => ({
    gridColumn: 'span 2',
    display: 'grid',
    gridTemplateColumns: '150px 1fr',
    '& > div:last-of-type': {
        display: 'grid',
        gridTemplateColumns: '500px 1fr'
    }
}));

export const StyledTextAreaContainer = styled(Box)(() => ({
    gridColumn: 'span 2',
    display: 'grid',
    gridTemplateColumns: '150px 1fr',
    '& > div': {
        height: '100%'
    }
}));
