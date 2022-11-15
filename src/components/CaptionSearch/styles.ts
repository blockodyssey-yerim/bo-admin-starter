import { Box, Divider, Grid, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledSearchForm = styled(Box)(({ theme: { palette, shadows } }) => ({
    width: '100%',
    marginBottom: 20,
    boxShadow: shadows[1],
    borderRadius: 10,
    backgroundColor: palette.common.white,
    '& > div:nth-of-type(2) > div > *': {
        height: 60
    }
}));

export const StyledSearchContainer = styled(Box)(() => ({
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    rowGap: 20,
    padding: '20px 0'
}));

export const StyledComponentContainer = styled(Box)(() => ({
    width: '100%',
    minHeight: 48,
    height: '100%',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    columnGap: 20,
    padding: '0 20px',
    gridColumn: 'span 2'
}));

export const StyledSelectDivider = styled(Divider)(() => ({
    height: 40,
    margin: '17px 10px 0',
    '&:last-of-type': {
        display: 'none'
    }
}));

export const StyledDivider = styled(Divider)(() => ({
    height: 20,
    margin: '17px 10px 0',
    '&:last-of-type': {
        display: 'none'
    }
}));

export const StyledEmptyBox = styled(Box)(() => ({
    height: 17
}));

export const StyledGrid = styled(Grid)(() => ({
    paddingBottom: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
    '& > div:last-of-type': {
        columnGap: 20
    }
}));

export const StyledTypography = styled(Typography)<{ component: React.ElementType }>(() => ({
    fontWeight: 500
}));
