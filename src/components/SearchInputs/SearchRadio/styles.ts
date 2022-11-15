/* eslint-disable import/prefer-default-export */
import { Box, Button, Select } from '@mui/material';
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

export const StyledEmptyBox = styled(Box)(() => ({
    height: 17
}));

export const StyledSelect = styled(Select)(({ theme: { palette } }) => ({
    minWidth: 120,
    maxWidth: 150,
    backgroundColor: palette.common.white
}));
