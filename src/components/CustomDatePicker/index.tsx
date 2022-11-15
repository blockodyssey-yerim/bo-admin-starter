import { forwardRef } from 'react';

import { CalendarMonth } from '@mui/icons-material';

import { StyledContainer, StyledIconButton } from 'components/CustomDatePicker/styles';
import { ICustomDatePicker } from 'components/CustomDatePicker/types';

const CustomDatePicker = forwardRef<HTMLInputElement, ICustomDatePicker>(function createInput(
    { value = '', placeholder = '', onClick = () => {} },
    ref
) {
    return (
        <StyledContainer>
            <input readOnly value={value} placeholder={placeholder} ref={ref} />
            <StyledIconButton aria-label="select datetime" disableRipple disableTouchRipple onClick={onClick}>
                <CalendarMonth />
            </StyledIconButton>
        </StyledContainer>
    );
});

export default CustomDatePicker;
