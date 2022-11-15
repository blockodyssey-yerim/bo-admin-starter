import { useQuery } from '@tanstack/react-query';
import { useHistory, useParams } from 'react-router-dom';

import { useDialog, useMessage } from 'hooks/modal';

import { getData } from 'api';
import { IResponseData, ErrorType } from 'api/types';

export type ReturnType = {
    idx: number;
    category: string;
    name: string;
    description: string;
    calories: number;
    fat: number;
    carbs: number;
    protein: number;
    ingredients: string;
    quantity: number;
    useYn: string;
    regDate: string;
    color: string;
};

interface IGetDashboardData {
    menu: string;
    onSuccess?: (result: ReturnType) => void;
}

const useGetDashboardData = ({ menu, onSuccess }: IGetDashboardData) => {
    const history = useHistory();
    const { idx } = useParams<{ idx: string }>();

    const handleDialog = useDialog();
    const handleMessage = useMessage();

    const result = useQuery<IResponseData<ReturnType>, ErrorType>(
        [`${menu.toLowerCase()} detail`, idx],
        () => getData<IResponseData<ReturnType>>(`/web/example/detail/${idx}`),
        {
            enabled: !!idx,
            onSuccess: (result: IResponseData<ReturnType>) => {
                if (onSuccess) {
                    onSuccess(result.data);
                }
            },
            onError: (error: ErrorType) => {
                if (error.statusCode === 401 || error.statusCode === 409) {
                    handleMessage(error);
                } else {
                    handleDialog(error).then(() => {
                        history.goBack();
                    });
                }
            }
        }
    );

    return result;
};

export default useGetDashboardData;
