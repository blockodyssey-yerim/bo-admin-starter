import { SelectChangeEvent } from '@mui/material';

import { OptionType } from 'components/SearchInputs/types';

export interface ISearchSelect {
    caption?: boolean;
    dataList?: OptionType[];
    value?: string;
    name: string;
    onChange: (event: SelectChangeEvent<string | unknown>) => void;
}
