import { useMutation } from '@tanstack/react-query';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { setIsExit } from 'slices/menuSlice';
import { reset, setConfirmed } from 'slices/modalSlice';

import useTimeout from 'hooks/common/useTimeout';
import { useMessage } from 'hooks/modal';
import useDialog from 'hooks/modal/useDialog';

import { postData } from 'api';
import { ErrorType, IResponseBodyWithoutData } from 'api/types';

import { SUBMIT_MESSAGES } from 'constants/messages';

type BodyType = {
    description: string;
};

type PayloadType = {
    url: string;
    data: BodyType;
};

const useDashboardUpload = () => {
    const history = useHistory();
    const dispatch = useDispatch();

    const handleTimeout = useTimeout();
    const handleDialog = useDialog();
    const handleMessage = useMessage();

    const { mutate } = useMutation<IResponseBodyWithoutData, ErrorType, PayloadType>(
        ({ url, data }) => postData<IResponseBodyWithoutData, BodyType>(url, data),
        {
            onMutate: () => dispatch(setConfirmed()),
            onSuccess: () => {
                handleTimeout(() => {
                    dispatch(setIsExit(false));
                    dispatch(reset());
                    handleDialog(SUBMIT_MESSAGES.uploadComplete).then(() => {
                        history.push({ pathname: '/dashboard' });
                    });
                }, 600);
            },
            onError: (error: ErrorType) =>
                handleTimeout(() => {
                    dispatch(setIsExit(false));
                    dispatch(reset());
                    handleMessage(error);
                })
        }
    );

    return { mutate };
};

export default useDashboardUpload;
