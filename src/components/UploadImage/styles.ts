import { Box, Grid, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledImageContainer = styled(Box)(() => ({
    paddingBottom: 30,
    '& h4': {
        marginBottom: 15
    },
    "& input[type='file']": {
        display: 'none'
    }
}));

export const StyledPreviewContainer = styled(Grid)(() => ({
    width: 500,
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: 20,
    margin: '20px auto',
    '& img:last-of-type': {
        margin: 0
    }
}));

export const StyledImageButton = styled(Box)(() => ({
    position: 'relative',
    width: 70,
    height: 70,
    '& > button': {
        position: 'absolute',
        bottom: '-10px',
        right: '-10px',
        backgroundColor: 'common.black',
        color: 'common.white',
        padding: '5px',
        '& svg': {
            width: 12,
            height: 12
        },
        '&:hover': {
            background: 'common.black'
        },
        '&:active': {
            transform: 'scale(0.98)'
        }
    }
}));

export const StyledSmallDefaultImage = styled(Box)(({ theme: { palette, neutral } }) => ({
    width: 70,
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

export const StyledSmallImage = styled('img')(() => ({
    height: '100%',
    marginRight: 5,
    borderRadius: 4,
    cursor: 'pointer'
}));

export const StyledIconButton = styled(IconButton)<{ component: React.ElementType }>(({ theme: { palette } }) => ({
    width: 70,
    height: 70,
    borderRadius: '4px',
    border: `1px solid ${palette.common.black}`,
    '& svg': {
        width: 32,
        height: 32,
        color: palette.common.black
    },
    '&:hover': {
        backgroundColor: palette.common.white
    },
    '&:active': {
        transition: 'none',
        transform: 'scale(0.98)'
    }
}));
