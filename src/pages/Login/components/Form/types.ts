import { SubmitHandler } from 'react-hook-form';

import { IFormValues } from 'pages/Login/types';

export interface IForm {
    isLoading: boolean;
    onSubmit: SubmitHandler<IFormValues>;
}
