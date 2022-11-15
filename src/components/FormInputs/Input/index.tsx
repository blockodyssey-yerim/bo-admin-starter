import { Controller, useFormContext } from 'react-hook-form';

import { TextField } from '@mui/material';

import ErrorMessage from 'components/FormInputs/ErrorMessage';
import { IInput } from 'components/FormInputs/Input/types';

function Input({ showError = true, fullWidth = false, multiline = false, rows = 0, inputType = 'text', name }: IInput) {
    const {
        control,
        formState: { errors }
    } = useFormContext();

    return (
        <>
            <Controller
                name={name}
                control={control}
                render={({ field: { onChange, value } }) => (
                    <TextField
                        id={`outlined-${name}`}
                        label=""
                        variant="outlined"
                        multiline={multiline}
                        rows={rows}
                        fullWidth={fullWidth}
                        InputLabelProps={{ shrink: false }}
                        inputProps={{ 'aria-label': name }}
                        type={inputType}
                        name={name}
                        value={value || ''}
                        onChange={onChange}
                    />
                )}
            />
            {showError && errors[name] && <ErrorMessage text={String(errors[name]?.message)} />}
        </>
    );
}

export default Input;
