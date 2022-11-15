import { Link } from 'react-router-dom';

import { Button } from '@mui/material';

import { ILinkButton } from 'components/Buttons/LinkButton/types';

function LinkButton({
    size = 'large',
    color = 'primary',
    variant = 'outlined',
    disabled = false,
    text,
    path
}: ILinkButton) {
    return (
        <Button component={Link} to={path} size={size} color={color} variant={variant} disabled={disabled}>
            {text}
        </Button>
    );
}

export default LinkButton;
