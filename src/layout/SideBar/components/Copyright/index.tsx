import { Typography } from '@mui/material';

import { StyledBox } from 'layout/SideBar/components/Copyright/styles';

export default function Copyright() {
    return (
        <StyledBox>
            <Typography>
                Copyright © BlockOdyssey Corp. <br />
                All rights reserved.
            </Typography>
        </StyledBox>
    );
}
