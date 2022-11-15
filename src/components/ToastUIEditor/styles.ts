import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledContainer = styled(Box)(() => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    columnGap: 20
}));

export const StyledViewerContainer = styled(Box)(() => ({
    width: '100%',
    height: 600
}));
