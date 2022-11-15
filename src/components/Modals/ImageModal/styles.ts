import { DialogContent, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledImageContainer = styled(Grid)(() => ({
    justifyContent: 'space-between',
    alignItems: 'center',
    '& svg': {
        cursor: 'pointer'
    }
}));

export const StyledImageDialogContent = styled(DialogContent)(() => ({
    width: 700
}));
