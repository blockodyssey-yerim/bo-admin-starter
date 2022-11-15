import { Controller, useFormContext } from 'react-hook-form';

import { StyledTextField } from 'pages/Login/components/Input/styles';
import { IInput } from 'pages/Login/components/Input/types';
import { IFormValues } from 'pages/Login/types';

function LoginInput({ inputType = 'text', placeholder = '', name }: IInput) {
    const { control } = useFormContext<IFormValues>();

    return (
        <>
            <Controller
                name={name}
                control={control}
                render={({ field: { onChange, value } }) => (
                    <StyledTextField
                        id={`outlined-${name}`}
                        label=""
                        variant="standard"
                        fullWidth
                        InputLabelProps={{ shrink: false }}
                        inputProps={{ 'aria-label': name, placeholder, autoComplete: 'new-password' }}
                        type={inputType}
                        name={name}
                        value={value}
                        onChange={onChange}
                    />
                )}
            />
        </>
    );
}

export default LoginInput;
