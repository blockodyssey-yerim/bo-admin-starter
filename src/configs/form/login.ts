import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

export const SCHEMA = {
    Login: yup.object().shape({
        email: yup
            .string()
            .email('이메일 주소 또는 비밀번호가 올바르지 않습니다. \n다시 한번 확인해 주세요.')
            .required('이메일 주소 또는 비밀번호가 올바르지 않습니다. \n다시 한번 확인해 주세요.'),
        password: yup.string().required('이메일 주소 또는 비밀번호가 올바르지 않습니다. \n다시 한번 확인해 주세요.'),
        cookie: yup.string().notRequired()
    })
};

export const DEFAULT_VALUE = {
    Login: {
        email: '',
        password: '',
        cookie: true
    }
};

export const FORM_OPTIONS = {
    resolver: yupResolver(SCHEMA.Login),
    defaultValues: DEFAULT_VALUE.Login
};
