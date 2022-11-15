import ko from 'date-fns/locale/ko';
import Picker, { registerLocale } from 'react-datepicker';
import { Controller, useFormContext } from 'react-hook-form';

import { CustomDatePicker } from 'components';
import { IDatePicker } from 'components/FormInputs/DatePicker/types';

import { DATE_FORMAT } from 'configs/form/common';

import { formatDate, isEmpty } from 'utils/common';

import 'react-datepicker/dist/react-datepicker.css';

registerLocale('ko', ko);

function DatePicker({
    showTimeSelect = false,
    term = 'daily',
    minDate = undefined,
    maxDate = undefined,
    placeholder = '',
    name
}: IDatePicker) {
    const { getValues, control, setValue } = useFormContext();

    return (
        <Controller
            name={name}
            control={control}
            render={({ field: { onChange, value } }) => (
                <Picker
                    name={name}
                    selected={value ? new Date(value) : null}
                    showTimeSelect={showTimeSelect}
                    timeIntervals={1}
                    timeFormat="HH:mm"
                    dateFormat={DATE_FORMAT[(term || 'daily') as keyof typeof DATE_FORMAT]}
                    placeholderText={placeholder}
                    minDate={minDate ? new Date(minDate) : minDate}
                    maxDate={maxDate ? new Date(maxDate) : maxDate}
                    filterTime={(time) => {
                        if (name !== 'endDate') {
                            return true;
                        }
                        if (minDate) {
                            return new Date(minDate).getTime() < new Date(time).getTime();
                        }
                        return true;
                    }}
                    locale="ko"
                    onChange={(e) => onChange(formatDate(term!, e))}
                    onCalendarClose={() => {
                        if (
                            name === 'startDate' &&
                            !isEmpty(getValues('endDate')) &&
                            new Date(getValues('startDate')) > new Date(getValues('endDate'))
                        ) {
                            setValue('endDate', null);
                        }
                    }}
                    customInput={<CustomDatePicker />}
                />
            )}
        />
    );
}

export default DatePicker;
