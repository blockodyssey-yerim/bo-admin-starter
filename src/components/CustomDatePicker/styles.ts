import { Box, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledContainer = styled(Box)(() => ({
    display: 'flex',
    width: '100%',
    maxWidth: 300,
    height: 40,
    my: '5px',
    border: '1px solid #3d393533',
    padding: '0 0 0 14px',
    borderRadius: '4px',
    '& input': {
        width: '100%',
        maxWidth: 300,
        outline: 'none',
        border: 'none',
        cursor: 'default'
    }
}));

export const StyledIconButton = styled(IconButton)(() => ({
    borderRadius: '50%',
    padding: '0',
    minWidth: '40px',
    height: '40px',
    '&:hover': {
        backgroundColor: 'transparent'
    },
    '&.Mui-disabled': {
        color: 'rgba(0, 0, 0, 0.4)',
        backgroundColor: 'white'
    }
}));
