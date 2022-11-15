import { Controller, useFormContext } from 'react-hook-form';

import { FormControlLabel, RadioGroup, Radio } from '@mui/material';

import ErrorMessage from 'components/FormInputs/ErrorMessage';
import { IRadioButton } from 'components/FormInputs/RadioButton/types';

function RadioButton({ row = true, showError = true, name, options }: IRadioButton) {
    const {
        formState: { errors },
        control
    } = useFormContext();

    return (
        <>
            <Controller
                name={name}
                control={control}
                render={({ field: { onChange, value } }) => (
                    <RadioGroup aria-label="radio" row={row} value={value} onChange={(e) => onChange(e.target.value)}>
                        {options.map(({ label, value }, index) => (
                            <FormControlLabel
                                key={`radio-${index}`}
                                label={label}
                                value={value}
                                control={<Radio color="primary" />}
                            />
                        ))}
                    </RadioGroup>
                )}
            />
            {showError && errors[name] && <ErrorMessage text={String(errors[name]?.message)} />}
        </>
    );
}

export default RadioButton;
