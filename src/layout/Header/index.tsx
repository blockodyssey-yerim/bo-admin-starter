import React, { useState } from 'react';

import { shallowEqual } from 'react-redux';
import { Link } from 'react-router-dom';

import { AccountCircle as AccountCircleIcon, Menu as MenuIcon } from '@mui/icons-material';
import { MenuList, Typography } from '@mui/material';

import { setLogOut } from 'slices/loginSlice';
import { setShowMenu } from 'slices/menuSlice';

import { useAppDispatch, useAppSelector } from 'hooks/redux';

import {
    StyledAppBar,
    StyledIconButton,
    StyledMenuButon,
    StyledMenuItem,
    StyledPopover,
    StyledToolbar,
    StyledTypography,
    StyledUserButton
} from 'layout/Header/styles';

export default function Header() {
    const dispatch = useAppDispatch();
    const { menuTitle, showSidebar } = useAppSelector(
        (state) => ({ menuTitle: state.menu.menuTitle, showSidebar: state.menu.showSidebar }),
        shallowEqual
    );

    const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
    const open = Boolean(anchorEl);
    const id = open ? 'admin-menu-popover' : undefined;

    const handleLogOut = () => {
        setAnchorEl(null);
        dispatch(setLogOut());
    };

    const onClick = (e: React.MouseEvent<HTMLElement>) => setAnchorEl(e.currentTarget);

    const onClose = () => setAnchorEl(null);

    return (
        <StyledAppBar position="fixed" elevation={0} open={showSidebar}>
            <StyledToolbar variant="dense" open={showSidebar}>
                <StyledTypography open={showSidebar} component="h2" variant="h2">
                    <StyledIconButton aria-label="open drawer" edge="start" onClick={() => dispatch(setShowMenu())}>
                        <MenuIcon />
                    </StyledIconButton>
                    {menuTitle}
                </StyledTypography>
                <StyledUserButton
                    aria-describedby={id}
                    disableRipple
                    startIcon={<AccountCircleIcon />}
                    variant="contained"
                    onClick={onClick}
                >
                    <Typography component="p" variant="body2">
                        블록오디세이님
                    </Typography>
                </StyledUserButton>
                <StyledPopover
                    id={id}
                    open={open}
                    anchorEl={anchorEl}
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                    onClose={onClose}
                >
                    <MenuList component="div" id="admin-menu" aria-labelledby="admin-menu-button">
                        <StyledMenuItem component={Link} to="/admin/password" onClick={onClose}>
                            <Typography variant="body2">비밀번호 수정</Typography>
                        </StyledMenuItem>
                        <StyledMenuItem component={Link} to="/admin/info" onClick={onClose}>
                            <Typography variant="body2">정보 수정</Typography>
                        </StyledMenuItem>
                        <StyledMenuButon component="button" onClick={handleLogOut}>
                            <Typography variant="body2">로그아웃</Typography>
                        </StyledMenuButon>
                    </MenuList>
                </StyledPopover>
            </StyledToolbar>
        </StyledAppBar>
    );
}
