import { Controller, useFormContext } from 'react-hook-form';

import { FormControlLabel, Checkbox } from '@mui/material';

import { ICheckBox } from 'components/FormInputs/CheckBox/types';
import ErrorMessage from 'components/FormInputs/ErrorMessage';

function CheckBox({ showError = true, name, options }: ICheckBox) {
    const {
        formState: { errors },
        control
    } = useFormContext();

    return (
        <>
            {options.map(({ name, label }) => (
                <Controller
                    key={`controller-${label}`}
                    name={name}
                    control={control}
                    render={({ field: { onChange, value } }) => (
                        <FormControlLabel
                            key={`checkbox-${label}`}
                            label={label}
                            control={
                                <Checkbox
                                    color="primary"
                                    name={name}
                                    checked={value}
                                    onChange={(e) => onChange(e.target.checked)}
                                />
                            }
                        />
                    )}
                />
            ))}
            {showError && errors[name] && <ErrorMessage text={String(errors[name]?.message)} />}
        </>
    );
}

export default CheckBox;
