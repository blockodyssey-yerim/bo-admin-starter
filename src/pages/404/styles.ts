import { Button, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledContainer = styled(Grid)(() => ({
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    '& > div': {
        width: 700,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        '& > div': {
            width: 592,
            height: 378,
            fontSize: 170,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        },
        '& > h3': {
            marginBottom: 20
        }
    }
}));

export const StyledButton = styled(Button)(() => ({
    width: 196,
    height: 40,
    marginBottom: 16,
    borderRadius: 4,
    fontSize: 13,
    fontWeight: 700,
    lineHeight: '17px',
    letterSpacing: '-0.52px'
}));
