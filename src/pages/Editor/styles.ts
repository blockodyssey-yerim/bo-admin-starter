/* eslint-disable import/prefer-default-export */
import { Paper } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledPaper = styled(Paper)(() => ({
    padding: 20,
    borderRadius: 10,
    '& > h2': {
        marginBottom: 20
    },
    '& > button': {
        height: 40,
        marginTop: 20
    }
}));
