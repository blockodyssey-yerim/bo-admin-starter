import { setMessage } from 'slices/modalSlice';

import { useAppDispatch } from 'hooks/redux';

type MessageType = {
    title?: string;
    message?: string;
    statusCode?: number | null;
};

const useMessage = () => {
    const dispatch = useAppDispatch();

    const handleMessage = (data: MessageType) => dispatch(setMessage(data));

    return handleMessage;
};

export default useMessage;
