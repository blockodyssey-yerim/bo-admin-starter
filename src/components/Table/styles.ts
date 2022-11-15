/* eslint-disable import/prefer-default-export */
import { Paper } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledTablePaper = styled(Paper)(({ theme: { border } }) => ({
    width: '100%',
    borderRadius: 10,
    overflow: 'hidden',
    '& table': {
        minWidth: 750,
        '& tr': {
            borderTop: `1px solid ${border.opacity01}`,
            borderBottom: `1px solid ${border.opacity01}`
        }
    }
}));
