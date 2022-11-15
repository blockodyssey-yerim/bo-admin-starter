import { Collapse } from '@mui/material';
import { styled } from '@mui/material/styles';

import customTheme from 'styles/theme/customTheme';

export const listStyle = {
    list: {
        '& .MuiListItemButton-root.Mui-selected': {
            backgroundColor: 'background.default',
            '& p': {
                color: 'text.primary'
            },
            '& svg': {
                color: 'text.primary'
            }
        }
    },
    collapsedList: {
        '&& > .MuiListItemButton-root.Mui-selected': {
            backgroundColor: customTheme.neutral.lightOpacity07,
            '& p': {
                color: 'text.primary'
            },
            '& svg': {
                color: 'text.primary'
            },
            opacity: 0.7
        },
        '& .MuiListItemButton-root.Mui-selected': {
            backgroundColor: 'background.default',
            '& p': {
                color: 'text.primary'
            },
            '& svg': {
                color: 'text.primary'
            }
        }
    }
};

export const StyledCollapse = styled(Collapse)(() => ({
    '& .MuiListItemButton-root': {
        borderRadius: '4px',
        paddingLeft: '46px'
    }
}));
