import { StylesConfig } from 'react-select';

import { OptionType } from 'components/FormInputs/types';

type IsMulti = boolean;
export type StyleType = StylesConfig<OptionType, IsMulti>;

export interface ISelect {
    showError?: boolean;
    isClearable?: boolean;
    isSearchable?: boolean;
    name: string;
    options: OptionType[];
}
