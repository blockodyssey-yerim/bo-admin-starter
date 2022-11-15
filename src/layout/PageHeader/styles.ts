/* eslint-disable import/prefer-default-export */
import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledBox = styled(Box)(({ theme: { palette } }) => ({
    height: 70,
    padding: 20,
    borderBottom: `2px solid ${palette.background.default}`,
    '& a': {
        textDecoration: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        '& svg': {
            marginRight: 20
        }
    }
}));
