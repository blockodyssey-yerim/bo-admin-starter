import { SelectChangeEvent } from '@mui/material';

import { DateType } from 'components/SearchInputs/types';

export interface IDateTermButton {
    caption?: boolean;
    dates?: DateType;
    onSelect?: (e: SelectChangeEvent<string | unknown>) => void;
    onChange: (name: string, value: string | null) => void;
    onClick: (name: string, months: number | null, dateTerm: number) => void;
}
