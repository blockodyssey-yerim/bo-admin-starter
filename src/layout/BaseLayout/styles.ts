/* eslint-disable import/prefer-default-export */
import { Container, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';

import { OpenType } from 'layout/BaseLayout/types';

export const StyledGrid = styled(Grid)(({ theme: { breakpoints } }) => ({
    position: 'relative',
    '& > div:first-of-type': {
        flex: 0,
        width: '100%',
        height: 1,
        [breakpoints.up('xs')]: {
            minHeight: 1,
            padding: 0
        }
    }
}));

export const StyledContainer = styled(Container, {
    shouldForwardProp: (prop) => prop !== 'open'
})<OpenType>(({ theme: { breakpoints }, open }) => ({
    flex: 1,
    [breakpoints.up('lg')]: {
        width: 'calc(100% - 240px)',
        marginLeft: 240
    },
    [breakpoints.up('xl')]: {
        marginLeft: 0
    },
    minWidth: 1145,
    width: '100%',
    marginTop: 80,
    borderRadius: 4,
    [breakpoints.up('xs')]: {
        maxWidth: '100%',
        padding: 20,
        ...(open && {
            marginLeft: 240
        })
    }
}));
