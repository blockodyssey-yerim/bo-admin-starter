/* eslint-disable import/prefer-default-export */
import { TextField } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledTextField = styled(TextField)(({ theme: { border } }) => ({
    width: 300,
    '& .MuiInput-root:before': {
        borderBottom: `2px solid ${border.opacity02}`
    },
    '& input': {
        height: 65,
        fontWeight: 500,
        fontSize: 13,
        lineHeight: '65px',
        padding: 0
    }
}));
