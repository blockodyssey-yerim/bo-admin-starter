import { shallowEqual } from 'react-redux';

import { Typography } from '@mui/material';

import { useAppSelector } from 'hooks/redux';

import { StyledBox } from 'pages/Dashboard/Detail/components/QuantityTable/styles';
import { StyledInputContainer, StyledLabel } from 'pages/Dashboard/styles';

function QuantityTable() {
    const data = useAppSelector((state) => state.modal.data, shallowEqual);

    return (
        <StyledBox>
            <StyledLabel>
                <Typography variant="inputLabel">판매량</Typography>
            </StyledLabel>
            <StyledInputContainer>
                <Typography variant="body2">{data.quantity ? `${data.quantity.toLocaleString()}` : ''}</Typography>
            </StyledInputContainer>
        </StyledBox>
    );
}

export default QuantityTable;
