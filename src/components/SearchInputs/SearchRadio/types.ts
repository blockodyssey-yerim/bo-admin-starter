import { OptionType } from 'components/SearchInputs/types';

export interface ISearchRadio {
    caption?: boolean;
    dataList?: OptionType[];
    name: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
