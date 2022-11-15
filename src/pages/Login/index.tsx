import { useEffect } from 'react';

import { useCookies } from 'react-cookie';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';

import { MessageModal } from 'components/Modals';
import CompanyLogo from 'pages/Login/components/CompanyLogo';
import LoginForm from 'pages/Login/components/Form';
import useLogin from 'pages/Login/hooks/useLogin';
import { StyledContainer } from 'pages/Login/styles';
import { IFormValues } from 'pages/Login/types';

import { FORM_OPTIONS } from 'configs/form/login';

export default function Login() {
    const methods = useForm<IFormValues>(FORM_OPTIONS);
    const [cookies, setCookie, removeCookie] = useCookies(['cookieID']);

    useEffect(() => {
        if (cookies.cookieID) {
            methods.setValue('email', cookies.cookieID);
        }
    }, [methods, cookies.cookieID]);

    const { mutate, isLoading } = useLogin({ formData: methods.getValues(), setCookie, removeCookie });

    const onSubmit: SubmitHandler<IFormValues> = (data) =>
        mutate({ url: '/web/login', data: { email: data.email, password: data.password } });

    return (
        <FormProvider {...methods}>
            <StyledContainer>
                <CompanyLogo />
                <LoginForm isLoading={isLoading} onSubmit={onSubmit} />
                <MessageModal />
            </StyledContainer>
        </FormProvider>
    );
}
