import { AppBar, Button, IconButton, MenuItem, Popover, Toolbar, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

import { OpenType } from 'layout/Header/types';

export const StyledAppBar = styled(AppBar, {
    shouldForwardProp: (prop) => prop !== 'open'
})<OpenType>(({ theme: { palette, breakpoints }, open }) => ({
    width: '100%',
    height: 80,
    left: 0,
    display: 'block',
    zIndex: 10,
    color: palette.text.primary,
    backgroundColor: palette.common.white,
    [breakpoints.up('lg')]: {
        width: 'calc(100% - 240px)',
        left: 240,
        flexDirection: 'row'
    },
    ...(open && {
        [breakpoints.up('xs')]: {
            width: 'calc(100% - 240px)',
            left: 240,
            flexDirection: 'row'
        }
    })
}));

export const StyledToolbar = styled(Toolbar, {
    shouldForwardProp: (prop) => prop !== 'open'
})<OpenType>(({ theme: { breakpoints }, open }) => ({
    '&.MuiToolbar-dense': {
        minHeight: 80
    },
    [breakpoints.up('xs')]: {
        paddingLeft: 0,
        paddingRight: 0,
        justifyContent: 'space-between'
    },
    [breakpoints.up('lg')]: {
        justifyContent: 'flex-start'
    },
    ...(open && {
        [breakpoints.up('xs')]: {
            paddingLeft: 0,
            paddingRight: 0,
            justifyContent: 'flex-start'
        }
    })
}));

export const StyledUserButton = styled(Button)(({ theme: { palette } }) => ({
    minWidth: 140,
    marginRight: 20,
    padding: '10px 0 10px 10px',
    textAlign: 'left',
    border: 'none',
    boxShadow: 'unset',
    color: 'inherit',
    backgroundColor: palette.common.white,
    '& p': {
        fontWeight: 500
    },
    '&:hover': {
        border: 'none',
        boxShadow: 'unset',
        backgroundColor: palette.common.white
    },
    '& svg': {
        width: 30,
        height: 30,
        color: palette.primary.main
    }
}));

export const StyledMenuItem = styled(MenuItem)<{ component?: React.ElementType; to?: string }>(
    ({ theme: { border } }) => ({
        width: 140,
        height: 32,
        paddingTop: 0,
        paddingBottom: 0,
        paddingRight: 20,
        paddingLeft: 0,
        textAlign: 'right',
        borderBottom: `1px solid ${border.opacity01}`,
        '& > * ': {
            width: '100%'
        },
        '&:last-child': {
            borderBottom: 'none'
        }
    })
);

export const StyledMenuButon = styled(MenuItem)<{ component?: React.ElementType }>(({ theme: { border } }) => ({
    width: 140,
    height: 32,
    paddingTop: 0,
    paddingBottom: 0,
    paddingRight: 20,
    paddingleft: 0,
    textAlign: 'right',
    borderBottom: `1px solid ${border.opacity01}`,
    '& > p': {
        width: '100%'
    }
}));

export const StyledTypography = styled(Typography, {
    shouldForwardProp: (prop) => prop !== 'open'
})<OpenType & { component?: React.ElementType }>(({ theme: { breakpoints }, open }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingLeft: 20,
    [breakpoints.up('lg')]: {
        flex: 1
    },
    ...(open && {
        [breakpoints.up('xs')]: {
            flex: 1
        }
    })
}));

export const StyledIconButton = styled(IconButton)(({ theme: { breakpoints } }) => ({
    paddingRight: 0,
    marginRight: 20,
    [breakpoints.up('lg')]: {
        display: 'none'
    }
}));

export const StyledPopover = styled(Popover)(() => ({
    '& .MuiPaper-root': {
        marginTop: 10
    }
}));
