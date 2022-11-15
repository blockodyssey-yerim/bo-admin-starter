import { Box, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledContainer = styled(Box)(() => ({
    '& h4': {
        marginBottom: 15
    },
    '& > div:first-of-type': {
        display: 'grid',
        gridTemplateColumns: '150px 1fr',
        marginBottom: 20
    },
    '& > div:last-of-type': {
        display: 'grid',
        gridTemplateColumns: '150px 1fr',
        marginBottom: 20
    }
}));

export const StyledBox = styled(Box)(({ theme: { border } }) => ({
    borderRadius: 4,
    border: `1px solid ${border.opacity01}`
}));

export const StyledLabel = styled(Box)(({ theme: { border } }) => ({
    width: '100%',
    height: 48,
    padding: '0 20px',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderRight: `1px solid ${border.opacity01}`,
    borderBottom: `1px solid ${border.opacity01}`,
    '&:nth-last-of-type(2)': {
        height: '100%',
        borderBottom: 0
    }
}));

export const StyledInputContainer = styled(Box)(({ theme: { border } }) => ({
    width: '100%',
    height: 48,
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    columnGap: 20,
    padding: '0 20px',
    borderLeft: 0,
    borderBottom: `1px solid ${border.opacity01}`,
    '&:last-of-type': {
        borderBottom: 0
    }
}));

export const StyledQuantityContainer = styled(Grid)(() => ({
    justifyContent: 'space-between',
    alignItems: 'center'
}));
