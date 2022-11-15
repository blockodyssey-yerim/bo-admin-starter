import { DialogActions, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledTypography = styled(Typography)(() => ({
    minWidth: 320,
    whiteSpace: 'pre-wrap'
}));

export const StyledDialogActions = styled(DialogActions)(() => ({
    padding: 20
}));
