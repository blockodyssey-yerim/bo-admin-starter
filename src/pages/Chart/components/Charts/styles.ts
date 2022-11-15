import { Grid, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledContainer = styled(Grid)(() => ({
    justifyContent: 'flex-start',
    alignItems: 'center'
}));

export const StyledPaper = styled(Paper)(() => ({
    padding: 20,
    borderRadius: 10
}));
