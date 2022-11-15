import { IFormValues } from 'pages/Login/types';

export interface IInput {
    inputType?: string;
    placeholder: string;
    name: keyof IFormValues;
}
