import { Controller, useFormContext } from 'react-hook-form';
import ReactSelect from 'react-select';

import ErrorMessage from 'components/FormInputs/ErrorMessage';
import { formStyles } from 'components/FormInputs/Select/styles';
import { ISelect } from 'components/FormInputs/Select/types';

function Select({ showError = true, isClearable = false, isSearchable = false, name, options }: ISelect) {
    const {
        formState: { errors },
        control
    } = useFormContext();

    return (
        <>
            <Controller
                name={name}
                control={control}
                render={({ field }) => (
                    <ReactSelect
                        {...field}
                        options={options}
                        aria-label={name}
                        isClearable={isClearable}
                        isSearchable={isSearchable}
                        styles={formStyles}
                    />
                )}
            />
            {showError && errors[name] && <ErrorMessage text={String(errors[name]?.message)} />}
        </>
    );
}

export default Select;
