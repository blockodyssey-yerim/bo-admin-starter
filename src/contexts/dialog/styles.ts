import { DialogActions, DialogContent, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledDialogActions = styled(DialogActions)(() => ({
    paddingTop: 20,
    paddingBottom: 20,
    justifyContent: 'center',
    columnGap: 10
}));

export const StyledDialogContent = styled(DialogContent)(() => ({
    paddingBottom: 0
}));

export const StyledTypography = styled(Typography)(() => ({
    whiteSpace: 'pre-wrap',
    minWidth: 320,
    maxWidth: 400,
    paddingBottom: 20
}));
