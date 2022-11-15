/* eslint-disable import/prefer-default-export */
import { Box, Button } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledButtonsContainer = styled(Box)(() => ({
    '& button': {
        marginRight: '5px'
    },
    '& button:last-of-type': {
        width: 'auto',
        marginRight: 0
    }
}));

export const StyledDateTermButton = styled(Button)(() => ({
    '&:hover': {
        transform: 'scale(0.98)'
    }
}));
