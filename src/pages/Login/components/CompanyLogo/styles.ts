import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledContainer = styled(Box)(({ theme: { palette } }) => ({
    width: 480,
    height: 640,
    position: 'relative',
    bgcolor: palette.primary.main,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column'
}));

export const StyledCompanyName = styled(Box)(({ theme: { palette } }) => ({
    textTransform: 'uppercase',
    fontSize: 32,
    fontWeight: 700,
    textAlign: 'center',
    color: palette.common.white
}));

export const StyledTypography = styled(Typography)(() => ({
    position: 'absolute',
    bottom: 120,
    left: 0,
    right: 0,
    textAlign: 'center',
    fontSize: 14,
    color: '#828282',
    lineHeight: '36px'
}));
