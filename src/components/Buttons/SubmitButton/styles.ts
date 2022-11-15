/* eslint-disable import/prefer-default-export */
import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledSubmitButton = styled(Button)(({ theme: { disabled } }) => ({
    '&.Mui-disabled': {
        border: 1,
        borderColor: disabled.main,
        backgroundColor: disabled.main
    }
}));
