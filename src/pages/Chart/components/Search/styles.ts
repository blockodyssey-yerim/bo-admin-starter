import { Box, Grid, Select } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledSearchContainer = styled(Grid)(({ theme: { palette, shadows } }) => ({
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center',
    margin: '0 auto 20px',
    padding: 20,
    borderRadius: 10,
    columnGap: 20,
    backgroundColor: palette.common.white,
    boxShadow: shadows[1]
}));

export const StyledSelect = styled(Select)(({ theme: { palette } }) => ({
    minWidth: 120,
    maxWidth: 150,
    backgroundColor: palette.common.white
}));

export const StyledEmptyBox = styled(Box)(() => ({
    height: 17
}));
