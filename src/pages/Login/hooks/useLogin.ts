import { useMutation } from '@tanstack/react-query';
import { useHistory } from 'react-router-dom';
import { CookieSetOptions } from 'universal-cookie';

import { setLogIn } from 'slices/loginSlice';

import { useMessage } from 'hooks/modal';
import { useAppDispatch } from 'hooks/redux';

import { postData } from 'api';
import { ErrorType, IResponseData } from 'api/types';
import { IFormValues } from 'pages/Login/types';

type ReturnType = {
    idx: number;
    email: string;
};

type BodyType = {
    email: string;
    password: string;
};

type PayloadType = {
    url: string;
    data: BodyType;
};

interface ILogin {
    formData: IFormValues;
    setCookie: (name: 'cookieID', value: string, options?: CookieSetOptions | undefined) => void;
    removeCookie: (name: 'cookieID', options?: CookieSetOptions | undefined) => void;
}

const useLogin = ({ formData, setCookie, removeCookie }: ILogin) => {
    const history = useHistory();
    const dispatch = useAppDispatch();

    const handleMessage = useMessage();

    const { mutate, isLoading } = useMutation<IResponseData<ReturnType>, ErrorType, PayloadType>(
        ({ url, data }) => postData<IResponseData<ReturnType>, BodyType>(url, data),
        {
            onSuccess: (data) => {
                const { cookie, email } = formData;
                if (cookie) {
                    setCookie('cookieID', email, { maxAge: 60 * 60 * 24 * 14 });
                } else {
                    removeCookie('cookieID');
                }
                dispatch(setLogIn(data));
                history.replace('/');
            },
            onError: (error: ErrorType) => {
                handleMessage(error);
                // TODO: DEMO 코드 제거
                // =================DEMO=================
                const { cookie, email } = formData;
                if (cookie) {
                    setCookie('cookieID', email, { maxAge: 60 * 60 * 24 * 14 });
                } else {
                    removeCookie('cookieID');
                }
                dispatch(setLogIn({}));
                history.replace('/');
                // =================DEMO=================
            }
        }
    );

    return { mutate, isLoading };
};

export default useLogin;
