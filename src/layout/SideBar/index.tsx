import React, { useState, useEffect, useCallback } from 'react';

import PerfectScrollbar from 'react-perfect-scrollbar';
import { shallowEqual } from 'react-redux';
import { Link } from 'react-router-dom';

import { Drawer, Typography } from '@mui/material';

import { reset } from 'slices/searchSlice';

import { useAppDispatch, useAppSelector } from 'hooks/redux';

import { Copyright, MenuList } from 'layout/SideBar/components';
import { StyledBox, StyledDivider, StyledLogoButton, StyledNav } from 'layout/SideBar/styles';
import { MenuType, SiblingsType } from 'layout/SideBar/types';

import { MENU } from 'configs/menu';

import { isEmpty } from 'utils/common';

import 'react-perfect-scrollbar/dist/css/styles.css';

function SideBar() {
    const dispatch = useAppDispatch();
    const adminType = useAppSelector((state) => state.login.adminType);
    const { menuNum, showSidebar } = useAppSelector(
        (state) => ({ menuNum: state.menu.menuNum, showSidebar: state.menu.showSidebar }),
        shallowEqual
    );

    const [open, setOpen] = useState<Record<string, boolean>>({});

    const menuType = (() => {
        switch (adminType) {
            case 'public':
                return 'public';
            case 'private':
                return 'private';
            default:
                return '';
        }
    })();

    const handler = {
        handleToggleMenu: (menu: string) => setOpen((prev) => ({ ...prev, [menu]: !prev[menu] })),
        handlePageChange: () => dispatch(reset())
    };

    const handleMenu = useCallback(() => {
        if (!isEmpty(menuNum)) {
            const initMenu: Record<string, boolean> = {};
            const menus: MenuType[] = MENU[menuType as keyof typeof MENU];

            menus?.forEach((group) => {
                group?.siblings?.map((menus: SiblingsType) => {
                    if (menus.subMenus) {
                        initMenu[menus.menu] = menus.subMenus.some((menu) => menu.num === Number(menuNum));
                    } else {
                        initMenu[menus.menu] = false;
                    }
                    return initMenu;
                });
                return initMenu;
            });
            setOpen(initMenu);
        }
    }, [menuNum, menuType]);

    useEffect(() => {
        handleMenu();
    }, [handleMenu]);

    return (
        <StyledNav component="nav" aria-label="side navigation" open={showSidebar}>
            <Drawer variant="permanent" anchor="left">
                <StyledBox>
                    <StyledLogoButton component={Link} to="/">
                        <Typography variant="h1">bo-admin-starter</Typography>
                    </StyledLogoButton>
                </StyledBox>
                <PerfectScrollbar component="div">
                    {MENU[menuType as keyof typeof MENU]?.map((group) => (
                        <React.Fragment key={`navigation-${group.caption}`}>
                            <MenuList group={group} menuNum={menuNum} open={open} handler={handler} />
                            <StyledDivider />
                        </React.Fragment>
                    ))}
                </PerfectScrollbar>
                <Copyright />
            </Drawer>
        </StyledNav>
    );
}

export default SideBar;
