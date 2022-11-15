/* eslint-disable import/prefer-default-export */
import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledBox = styled(Box)(({ theme: { palette } }) => ({
    width: '100%',
    height: 100,
    padding: '0 0 20px 30px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '& p': {
        width: 'inherit',
        fontSize: 12,
        lineHeight: '18px',
        fontWeight: 300,
        letterSpacing: '0px',
        color: palette.common.white,
        opacity: 0.5
    }
}));
