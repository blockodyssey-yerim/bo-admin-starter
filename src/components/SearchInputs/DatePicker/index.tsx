import ko from 'date-fns/locale/ko';
import Picker, { registerLocale } from 'react-datepicker';

import { Grid, Typography } from '@mui/material';

import CustomDatePicker from 'components/CustomDatePicker';
import { StyledEmptyBox } from 'components/SearchInputs/DatePicker/styles';
import { IDatePicker } from 'components/SearchInputs/DatePicker/types';

import { DATE_FORMAT } from 'configs/search';

import { formatDate } from 'utils/common';

import 'react-datepicker/dist/react-datepicker.css';

registerLocale('ko', ko);

function DatePicker({
    readOnly = false,
    caption = false,
    dates = { startDate: null, endDate: null },
    term,
    onChange
}: IDatePicker) {
    return (
        <>
            <Grid item xs="auto">
                {caption && (
                    <Typography component="p" variant="caption">
                        시작일
                    </Typography>
                )}
                <Picker
                    name="startDate"
                    readOnly={readOnly}
                    selected={dates.startDate ? new Date(dates.startDate) : null}
                    dateFormat={DATE_FORMAT[(term || 'daily') as keyof typeof DATE_FORMAT]}
                    maxDate={new Date()}
                    locale="ko"
                    onChange={(e) => onChange('startDate', e ? formatDate(term, e) : null)}
                    customInput={<CustomDatePicker />}
                />
            </Grid>
            <Grid item xs="auto">
                {caption && <StyledEmptyBox />}
                <Typography component="span" variant="dash">
                    ~
                </Typography>
            </Grid>
            <Grid item xs="auto">
                {caption && (
                    <Typography component="p" variant="caption">
                        종료일
                    </Typography>
                )}
                <Picker
                    name="endDate"
                    readOnly={readOnly}
                    selected={dates.endDate ? new Date(dates.endDate) : null}
                    dateFormat={DATE_FORMAT[(term || 'daily') as keyof typeof DATE_FORMAT]}
                    minDate={dates.startDate ? new Date(dates.startDate) : new Date(1900, 1, 1)}
                    maxDate={null}
                    locale="ko"
                    onChange={(e) => onChange('endDate', e ? formatDate(term, e) : null)}
                    customInput={<CustomDatePicker />}
                />
            </Grid>
        </>
    );
}

export default DatePicker;
