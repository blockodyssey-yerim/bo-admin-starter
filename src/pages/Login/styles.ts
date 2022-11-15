/* eslint-disable import/prefer-default-export */
import { Paper } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledContainer = styled(Paper)(() => ({
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
}));
