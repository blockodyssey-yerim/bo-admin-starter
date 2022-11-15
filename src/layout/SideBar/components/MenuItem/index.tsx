import { Link } from 'react-router-dom';

import { ExpandLess, ExpandMore } from '@mui/icons-material';
import { ListItemIcon, ListItemText, Typography } from '@mui/material';

import { StyledListItem } from 'layout/SideBar/components/MenuItem/styles';
import { IMenuItem } from 'layout/SideBar/components/MenuItem/types';

function MenuItem({ collapsed = false, open = false, path, icon, selected, menuTitle, onClick }: IMenuItem) {
    return path ? (
        <StyledListItem selected={selected} component={Link} to={path} onClick={onClick}>
            <ListItemIcon>
                <ListItemIcon>{icon}</ListItemIcon>
            </ListItemIcon>
            <ListItemText
                primary={
                    <Typography component="p" variant="h5">
                        {menuTitle}
                    </Typography>
                }
            />
            {collapsed && (open ? <ExpandLess /> : <ExpandMore />)}
        </StyledListItem>
    ) : (
        <StyledListItem component="button" selected={selected} disableRipple onClick={onClick}>
            <ListItemIcon>
                <ListItemIcon>{icon}</ListItemIcon>
            </ListItemIcon>
            <ListItemText
                primary={
                    <Typography component="p" variant="h5">
                        {menuTitle}
                    </Typography>
                }
            />
            {collapsed && (open ? <ExpandLess /> : <ExpandMore />)}
        </StyledListItem>
    );
}

export default MenuItem;
