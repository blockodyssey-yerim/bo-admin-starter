import { useGetList } from 'hooks/common';

import { IResponseData } from 'api/types';

export type ReturnType = {
    idx: number;
};

export interface IGetChart {
    menu: string;
    url: string;
}

const useGetChart = ({ menu, url }: IGetChart) => {
    const { isLoading, data } = useGetList<IResponseData<ReturnType[]>>({ menu, url });

    return { isLoading, data };
};

export default useGetChart;
