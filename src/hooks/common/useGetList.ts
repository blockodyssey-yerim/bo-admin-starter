import { useRef } from 'react';

import { useQuery, UseQueryResult } from '@tanstack/react-query';
import _ from 'lodash';

import { SearchType } from 'slices/searchSlice';

import { useMessage } from 'hooks/modal';
import { useSearchParams } from 'hooks/search';

import { getData } from 'api';
import { IResponseData, ErrorType } from 'api/types';

import { SEARCH_PARAM } from 'configs/search';

interface IGetList {
    menu: string;
    url: string;
}

// IResponseData = Type of Data Fetched
const useGetList = <ReturnType>({ menu, url }: IGetList): UseQueryResult<IResponseData<ReturnType>, ErrorType> => {
    const prevParams = useRef<SearchType | null>(null); // Previous Search Params

    const searchParams: SearchType = SEARCH_PARAM[menu as keyof typeof SEARCH_PARAM];
    const params: SearchType = useSearchParams(searchParams); // 검색 설정하기 (Search Params)

    const handleMessage = useMessage();

    const result = useQuery<IResponseData<ReturnType>, ErrorType>(
        [menu.toLowerCase()],
        () => getData<IResponseData<ReturnType>, SearchType>(url, params),
        {
            enabled: !!(Object.keys(params).length > 0 && !_.isEqual(prevParams.current, params)),
            onError: (error: ErrorType) => handleMessage(error),
            onSettled: () => {
                prevParams.current = params;
            }
        }
    );

    return result;
};

export default useGetList;
