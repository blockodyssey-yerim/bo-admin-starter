import { OptionType } from 'components/FormInputs/types';

export interface IRadioButton {
    row?: boolean;
    showError?: boolean;
    name: string;
    options: OptionType[];
}
