import { Box, ButtonBase, Divider } from '@mui/material';
import { styled } from '@mui/material/styles';

import { OpenType } from 'layout/BaseLayout/types';

const drawerWidth = 240;

export const StyledNav = styled(Box, {
    shouldForwardProp: (prop) => prop !== 'open'
})<OpenType>(({ theme: { palette, neutral, transitions, breakpoints }, open }) => ({
    display: 'flex',
    [breakpoints.up('xs')]: {
        width: 0,
        transition: transitions.create('width', {
            easing: transitions.easing.sharp,
            duration: transitions.duration.leavingScreen
        }),
        ...(open && {
            width: drawerWidth,
            transition: transitions.create('width', {
                easing: transitions.easing.easeOut,
                duration: transitions.duration.enteringScreen
            })
        }),
        '& .MuiPaper-root': {
            display: 'none',
            transition: transitions.create('display', {
                easing: transitions.easing.sharp,
                duration: transitions.duration.leavingScreen
            }),
            ...(open && {
                display: 'flex',
                transition: transitions.create('display', {
                    easing: transitions.easing.easeOut,
                    duration: transitions.duration.enteringScreen
                })
            })
        }
    },
    [breakpoints.up('lg')]: {
        width: drawerWidth,
        '& .MuiPaper-root': {
            display: 'flex'
        }
    },
    '& .MuiDrawer-root': {
        width: 'inherit',
        height: '100%',
        boxSizing: 'border-box',
        '& .MuiDrawer-paper': {
            width: 'inherit',
            top: 0,
            bottom: 0,
            paddingTop: 0,
            color: palette.common.white,
            backgroundColor: neutral.main,
            borderRight: 'none',
            '& .scrollbar-container': {
                height: 'calc(100% - 200px)'
            }
        }
    }
}));

export const StyledBox = styled(Box)(({ theme: { neutral } }) => ({
    width: drawerWidth,
    height: 80,
    backgroundColor: neutral.main,
    marginBottom: 20
}));

export const StyledLogoButton = styled(ButtonBase)<{ component?: React.ElementType; to?: string }>(() => ({
    width: drawerWidth,
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    '& h1': {
        textAlign: 'center',
        fontSize: 18,
        textTransform: 'uppercase'
    }
}));

export const StyledDivider = styled(Divider)(() => ({
    width: '90%',
    margin: '10px auto',
    backgroundColor: 'rgba(255, 255, 255, 0.5)'
}));
