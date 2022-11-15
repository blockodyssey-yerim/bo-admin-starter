/* eslint-disable import/prefer-default-export */
import { ListItemButton } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledListItem = styled(ListItemButton)<{ component?: React.ElementType; to?: string }>(
    ({ theme: { palette, neutral } }) => ({
        width: '90%',
        height: 45,
        margin: '5px auto 0',
        paddingTop: 4,
        paddingBottom: 4,
        backgroundColor: neutral.main,
        borderRadius: 4,
        '&&:hover': {
            borderRadius: 4,
            backgroundColor: palette.background.default,
            '& p': {
                color: palette.text.primary
            },
            '& svg': {
                color: palette.text.primary
            }
        },
        '& > div:first-of-type': {
            minWidth: 30
        },
        '& svg': {
            minWidth: 20,
            color: palette.common.white,
            width: 20,
            height: 20
        },
        '& p': {
            fontSize: 15,
            fontWeight: 500,
            lineHeight: '22px',
            letterSpacing: '-0.45px',
            textAlign: 'left',
            color: palette.common.white,
            opacity: 0.7
        }
    })
);
