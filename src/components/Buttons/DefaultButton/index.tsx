import { Button } from '@mui/material';

import { IDefaultButton } from 'components/Buttons/DefaultButton/types';

function DefaultButton({
    size = 'large',
    color = 'primary',
    variant = 'outlined',
    disabled = false,
    text,
    onClick
}: IDefaultButton) {
    return (
        <Button size={size} color={color} variant={variant} disabled={disabled} onClick={onClick}>
            {text}
        </Button>
    );
}

export default DefaultButton;
