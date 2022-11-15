import { SelectChangeEvent } from '@mui/material';

import { OptionType } from 'components/SearchInputs/types';

export interface ISearchField {
    caption?: boolean;
    searchCondition?: string;
    dataList?: OptionType[];
    searchKeyword: string | null;
    onSelect: (event: SelectChangeEvent<string | unknown>) => void;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onEnter: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}
