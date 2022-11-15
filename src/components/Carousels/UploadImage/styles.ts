import { Box, Button, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledLargeImageContainer = styled(Grid)(() => ({
    position: 'relative',
    width: 500,
    height: 500,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    '& img': {
        borderRadius: '4px'
    }
}));

export const StyledDefaultImage = styled(Box)(({ theme: { palette, neutral } }) => ({
    width: 500,
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: neutral.light,

    '& svg': {
        width: '30%',
        height: '30%',
        color: palette.background.default
    }
}));

export const StyledButtonsContainer = styled(Grid)(() => ({
    position: 'absolute',
    width: 500,
    height: 500,
    justifyContent: 'space-between',
    alignItems: 'center'
}));

export const StyledImageButton = styled(Button)(({ theme: { palette } }) => ({
    width: 40,
    height: 40,
    minWidth: 0,
    margin: 0,
    padding: 0,
    boxShadow: 'unset',
    border: 'none',
    borderRadius: 4,
    fontWeight: 700,
    fontSize: 12,
    color: palette.common.black,
    background: 'none',
    '& > span': {
        marginLeft: 0,
        marginRight: 0
    },
    '& svg': {
        width: 40,
        height: 40,
        background: '#fbfbfb80'
    },
    '&:hover': {
        boxShadow: 'unset',
        border: 'none',
        background: 'none',
        color: palette.common.black
    },
    '&:active': {
        boxShadow: 'unset',
        transition: 'none',
        background: 'none'
    }
}));

export const StyledNoImage = styled(Box)(({ theme: { palette } }) => ({
    width: 500,
    height: 500,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 500,
    borderRadius: 4,
    color: palette.text.label,
    textTransform: 'uppercase',
    fontSize: '18px',
    backgroundColor: palette.background.default
}));
