import { Typography } from '@mui/material';

import { IErrorMessage } from 'components/FormInputs/ErrorMessage/types';

function ErrorMessage({ text = '' }: IErrorMessage) {
    return (
        <Typography sx={{ whiteSpace: 'pre-wrap' }} component="p" color="error" variant="errorMessage">
            {text}
        </Typography>
    );
}

export default ErrorMessage;
