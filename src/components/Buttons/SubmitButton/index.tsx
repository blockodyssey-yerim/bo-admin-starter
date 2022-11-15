import { CircularProgress } from '@mui/material';

import { StyledSubmitButton } from 'components/Buttons/SubmitButton/styles';
import { ISubmitButon } from 'components/Buttons/SubmitButton/types';

function SubmitButton({
    type = 'button',
    size = 'large',
    color = 'primary',
    loading = false,
    variant = 'outlined',
    disabled = false,
    text,
    onClick
}: ISubmitButon) {
    return (
        <StyledSubmitButton
            type={type}
            size={size}
            color={color}
            variant={variant}
            startIcon={loading ? <CircularProgress color="primary" aria-label="loading submit" size={12} /> : null}
            disabled={!!(loading || disabled)}
            onClick={onClick}
        >
            {text}
        </StyledSubmitButton>
    );
}

export default SubmitButton;
