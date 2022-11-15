import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

export const SCHEMA = {
    ChangeInfo: yup.object().shape({
        name: yup.string().required(),
        email: yup.string().required(),
        phone: yup.string().required(),
        image: yup
            .mixed()
            .required()
            .test('image', '이미지를 선택해주세요', (value) => {
                return value.length > 0;
            })
    })
};

export const DEFAULT_VALUE = {
    ChangeInfo: {
        name: '',
        email: '',
        phone: '',
        image: undefined
    }
};

export const FORM_OPTIONS = {
    defaultValues: DEFAULT_VALUE.ChangeInfo,
    resolver: yupResolver(SCHEMA.ChangeInfo)
};
