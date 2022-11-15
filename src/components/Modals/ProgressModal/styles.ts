/* eslint-disable import/prefer-default-export */
import { DialogContent } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledProgressDialogContent = styled(DialogContent)(() => ({
    height: 320,
    width: 320,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    gap: '50px'
}));
