import { Box, Button, TextField, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledPasswordContainer = styled(Box)(() => ({
    height: 560,
    width: 322,
    margin: '0 auto',
    '& > div': {
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        '& > div:first-of-type': {
            marginBottom: 40
        },
        '& > div:nth-of-type(2)': {
            height: 48,
            marginBottom: 20
        },
        '& > div:nth-of-type(3)': {
            height: 48,
            marginBottom: 4
        },
        '& > div:nth-of-type(4)': {
            height: 48,
            marginBottom: 32
        },
        '& > div:last-of-type ': {
            width: '100%',
            height: 48
        }
    }
}));

export const StyledTitle = styled(Typography)<{ component: React.ElementType }>(() => ({
    fontWeight: 300,
    fontSize: 30,
    lineHeight: '38px',
    letterSpacing: '-1.8px',
    '& span': {
        font: 'inherit',
        fontWeight: 500,
        letterSpacing: 'inherit'
    }
}));

export const StyledTextInput = styled(TextField)(() => ({
    width: '100%',
    height: '100%',
    '& > *': {
        height: '100%'
    }
}));

export const StyledChangeButton = styled(Button)(({ theme: { palette } }) => ({
    width: '100%',
    height: '100%',
    backgroundColor: palette.primary.main,
    cursor: 'pointer',
    boxShadow: 'unset',
    fontSize: 13,
    fontWeight: 500,
    letterSpacing: '-0.26px',
    color: palette.common.white,
    border: 'none',
    borderRadius: 4,
    outline: 'none',
    '&:hover': {
        boxShadow: 'unset',
        backgroundColor: palette.primary.main
    }
}));
