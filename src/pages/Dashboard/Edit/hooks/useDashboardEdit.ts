import { useMutation } from '@tanstack/react-query';
import { useDispatch } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';

import { setIsExit } from 'slices/menuSlice';
import { reset, setConfirmed } from 'slices/modalSlice';

import useTimeout from 'hooks/common/useTimeout';
import { useMessage } from 'hooks/modal';
import useDialog from 'hooks/modal/useDialog';

import { patchData } from 'api';
import { ErrorType, IResponseBodyWithoutData } from 'api/types';

import { SUBMIT_MESSAGES } from 'constants/messages';

type BodyType = {
    index: string;
    description: string;
};

type PayloadType = {
    url: string;
    data: BodyType;
};

const useDashboardEdit = () => {
    const { search } = useLocation();
    const history = useHistory();

    const dispatch = useDispatch();

    const handleTimeout = useTimeout();
    const handleDialog = useDialog();
    const handleMessage = useMessage();

    const { mutate } = useMutation<IResponseBodyWithoutData, ErrorType, PayloadType>(
        ({ url, data }) => patchData<IResponseBodyWithoutData, BodyType>(url, data),
        {
            onMutate: () => dispatch(setConfirmed()),
            onSuccess: () => {
                handleTimeout(() => {
                    dispatch(setIsExit(false));
                    dispatch(reset());
                    handleDialog(SUBMIT_MESSAGES.editComplete).then(() => {
                        history.push({ pathname: '/dashboard', search });
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

export default useDashboardEdit;
