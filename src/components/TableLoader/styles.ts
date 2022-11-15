/* eslint-disable import/prefer-default-export */
import { Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledTableLoader = styled(Typography)<{ component: React.ElementType }>(() => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 80,
    fontWeight: 700,
    '& > span': {
        marginRight: 10
    }
}));
