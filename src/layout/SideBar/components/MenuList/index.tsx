import React from 'react';

import { List, Typography } from '@mui/material';

import { MenuItem } from 'layout/SideBar/components';
import { listStyle, StyledCollapse } from 'layout/SideBar/components/MenuList/styles';
import { IMenuList } from 'layout/SideBar/components/MenuList/types';

function MenuList({ group, menuNum, open, handler }: IMenuList) {
    const { handleToggleMenu, handlePageChange } = handler;

    return (
        <List
            component="div"
            sx={group.menu.some((menuName) => open[menuName]) ? listStyle.collapsedList : listStyle.list}
            subheader={
                group.setCaption ? (
                    <Typography variant="sidebarCaption" display="block">
                        {group.caption}
                    </Typography>
                ) : (
                    <></>
                )
            }
        >
            {group?.siblings?.map((menu, index) => (
                <React.Fragment key={`collapsed-menu-${menu.menu}-${index}`}>
                    {menu?.subMenus ? (
                        <>
                            <MenuItem
                                selected={menu.subMenus.some((subMenu) => subMenu.num === Number(menuNum))}
                                icon={menu.icon}
                                menuTitle={menu.menuTitle}
                                open={open[menu.menu]}
                                collapsed
                                onClick={() => handleToggleMenu(menu.menu)}
                            />
                            <StyledCollapse in={open[menu.menu]} unmountOnExit>
                                <List component="div">
                                    {menu.subMenus.map((subMenu) => (
                                        <MenuItem
                                            key={`sub-menu-${subMenu.num}`}
                                            icon={subMenu.icon}
                                            menuTitle={subMenu.menuTitle}
                                            path={subMenu.path}
                                            selected={menuNum === subMenu.num}
                                            onClick={() => handlePageChange()}
                                        />
                                    ))}
                                </List>
                            </StyledCollapse>
                        </>
                    ) : (
                        <MenuItem
                            selected={menuNum === menu.num}
                            icon={menu.icon}
                            menuTitle={menu.menuTitle}
                            path={menu.path}
                            onClick={() => handlePageChange()}
                        />
                    )}
                </React.Fragment>
            ))}
        </List>
    );
}

export default MenuList;
