import { Box, Grid, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledContainer = styled(Paper)(() => ({
    paddingBottom: 20
}));

export const StyledGrid = styled(Grid)(() => ({
    padding: 20,
    flexWrap: 'nowrap',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    columnGap: 20
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
