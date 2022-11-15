import React from 'react';

import { Button, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledTypography = styled(Typography)<{ component?: React.ElementType }>(() => ({
    height: 30,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start'
}));

export const StyledButton = styled(Button)(() => ({
    marginLeft: 20
}));
