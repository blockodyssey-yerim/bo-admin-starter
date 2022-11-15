import { Box, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledPaper = styled(Paper)(() => ({
    paddingBottom: 20
}));

export const StyledInfoContainer = styled(Box)(({ theme: { border } }) => ({
    padding: '20px 20px 0',
    '& > div:first-of-type': {
        display: 'grid',
        gridTemplateColumns: '200px 1fr',
        marginBottom: 20,
        borderRadius: 4,
        border: `1px solid ${border.opacity01}`
    },
    '& > div:last-of-type': {
        justifyContent: 'flex-end',
        alignItems: 'center'
    }
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
