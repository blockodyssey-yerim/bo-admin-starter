import { Box, Button } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledContainer = styled(Box)(({ theme: { palette } }) => ({
    width: 480,
    height: 640,
    bgcolor: palette.common.white,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    '& > form': {
        width: 305,
        '& > div:first-of-type': {
            marginBottom: 20,
            fontSize: 28,
            fontWeight: 700,
            textTransform: 'uppercase',
            lineHeight: 1.5,
            '& > div': {
                fontSize: 18,
                fontWeight: 500
            }
        }
    }
}));

export const StyledErrorContainer = styled(Box)(() => ({
    marginTop: 10
}));

export const LoginButton = styled(Button)(({ theme: { palette } }) => ({
    width: '100%',
    height: 48,
    marginTop: 42,
    backgroundColor: palette.primary.main,
    cursor: 'pointer',
    fontSize: 14,
    lineHeight: '20px',
    letterSpacing: '-0.7px',
    fontWeight: 500,
    color: palette.common.white,
    border: 'none',
    outline: 'none',
    transition: 'none',
    '&:hover': {
        backgroundColor: palette.primary.main
    },
    '&:focus': {
        color: palette.common.white
    },
    '&:active': {
        color: palette.common.white,
        transform: 'scale(0.98)'
    },
    '&:disabled': {
        color: palette.common.white
    }
}));
