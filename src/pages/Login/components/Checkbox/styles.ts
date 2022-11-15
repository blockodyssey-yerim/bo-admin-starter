import { FormControlLabel, Checkbox } from '@mui/material';
import { styled } from '@mui/material/styles';

export const Label = styled(FormControlLabel)(({ theme: { palette } }) => ({
    marginTop: 20,
    fontSize: 13,
    lineHeight: '20px',
    color: palette.text.label,
    letterSpacing: '-0.48px'
}));

export const CheckBox = styled(Checkbox)(({ theme: { palette } }) => ({
    '&.Mui-checked': {
        color: palette.common.black
    }
}));
