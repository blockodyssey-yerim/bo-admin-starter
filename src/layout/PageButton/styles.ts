import { Grid } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledTwoButtonsContainer = styled(Grid)(() => ({
    padding: '0 20px',
    justifyContent: 'flex-end',
    alignItems: 'center'
}));

export const StyledMultiButtonsContainer = styled(Grid)(() => ({
    padding: '0 20px',
    justifyContent: 'space-between',
    alignItems: 'center'
}));
