import { DateType } from 'components/SearchInputs/types';

export interface IDatePicker {
    readOnly?: boolean;
    caption?: boolean;
    dates?: DateType;
    term: string;
    onChange: (name: string, value: string | null) => void;
}
