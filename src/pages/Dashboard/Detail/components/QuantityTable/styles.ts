/* eslint-disable import/prefer-default-export */
import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledBox = styled(Box)(({ theme: { border } }) => ({
    display: 'grid',
    gridTemplateColumns: '150px 1fr',
    borderRadius: 4,
    border: `1px solid ${border.opacity01}`,
    '& > div:last-of-type': {
        minWidth: 320
    }
}));
