import { Box, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledPaper = styled(Paper)(() => ({
    padding: '0 20px 20px',
    borderRadius: 10,
    '& > div': {
        marginBottom: 20
    }
}));

export const StyledButtonContainer = styled(Box)(() => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    columnGap: 10
}));

export const StyledButton = styled(Box)(({ theme: { palette } }) => ({
    width: 120,
    height: 40,
    fontWeight: 500,
    color: palette.common.white,
    backgroundColor: palette.primary.main,
    border: `1px solid ${palette.primary.main}`,
    borderRadius: 4,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '&:hover': {
        transform: 'scale(0.98)'
    }
}));
