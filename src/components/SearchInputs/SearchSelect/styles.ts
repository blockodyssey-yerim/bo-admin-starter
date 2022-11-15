/* eslint-disable import/prefer-default-export */
import { Select } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledSelect = styled(Select)(({ theme: { palette } }) => ({
    minWidth: 120,
    maxWidth: 150,
    backgroundColor: palette.common.white
}));
