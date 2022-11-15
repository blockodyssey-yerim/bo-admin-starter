import { useHistory, useLocation } from 'react-router';

import { SearchType } from 'slices/searchSlice';

import { useAppSelector } from 'hooks/redux';

import { SEARCH_PARAM as params, SEARCH_PARAM } from 'configs/search';

import { getCurrentSearchParams, queryToString } from 'utils/common';

type SearchParamsType = Record<string, string | number | null | undefined>;

interface ISearch {
    menu: keyof typeof SEARCH_PARAM;
}

const useSearch = ({ menu }: ISearch) => {
    const history = useHistory();
    const location = useLocation();

    const searchStates = useAppSelector((state) => state.search);

    const handleSearch = (searchItems: SearchType) => {
        const searchParams: SearchParamsType = getCurrentSearchParams(searchStates, params[menu]);
        history.push({
            pathname: location.pathname,
            search: queryToString({ ...searchParams, ...searchItems })
        });
    };

    return handleSearch;
};

export default useSearch;
