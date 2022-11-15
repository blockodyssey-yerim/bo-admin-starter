import { useState, useEffect, useCallback } from 'react';

import { shallowEqual } from 'react-redux';
import { useLocation } from 'react-router-dom';

import { initialState, SearchKey, SearchType, setSearchFilters } from 'slices/searchSlice';

import { useAppSelector, useAppDispatch } from 'hooks/redux';
import { ObjectType, INewQueryParams, INewSearchStates } from 'hooks/search/types';

import { isEmpty, queryToObject } from 'utils/common';

// API Query Param
function getNewQueryParams({ key, currentReduxState, currentSearchParam }: INewQueryParams) {
    const params: ObjectType = {}; // API에 보낼 params

    if (isEmpty(currentSearchParam)) {
        params[key] = currentReduxState || null;
        return params;
    }

    if (key === 'page' || key === 'pageSize') {
        params[key] = +currentSearchParam!; // page / pageSize는 number
    } else if (currentReduxState !== currentSearchParam) {
        params[key] = currentSearchParam; // string
    } else {
        params[key] = currentReduxState || null; // location.search = redux state
    }

    return params;
}

// Redux State
function getNewSearchStates({ key, reduxStateName, currentReduxState, currentSearchParam }: INewSearchStates) {
    const newObject: ObjectType = {}; // redux store에 보낼 값들

    // location.search (x)
    // 현재 redux state가 initial state가 아니면 (--> 초기화 해야함)
    if (isEmpty(currentSearchParam) && currentReduxState !== initialState[reduxStateName as SearchKey]) {
        newObject[reduxStateName] = initialState[reduxStateName as SearchKey]!;
        return newObject;
    }

    // location.search (x)
    // redux state === initial state
    if (isEmpty(currentSearchParam)) {
        return newObject;
    }

    if ((key === 'page' || key === 'pageSize') && parseInt(currentReduxState, 10) !== +currentSearchParam!) {
        // page / pageSize는 number
        newObject[reduxStateName] = +currentSearchParam!;
    } else if (currentReduxState !== currentSearchParam) {
        // string
        newObject[reduxStateName] = currentSearchParam;
    }

    return newObject;
}

const useSearchParams = (searchParams: SearchType): SearchType => {
    const dispatch = useAppDispatch();
    const location = useLocation();
    const searchStates = useAppSelector((state) => state.search, shallowEqual);

    const [newParams, setNewParams] = useState<ObjectType>({});

    const handleSearchParams = useCallback(() => {
        try {
            const params: ObjectType = {}; // API에 보낼 params
            const newObject: ObjectType = {}; // redux store에 보낼 값들
            const search: ObjectType = queryToObject(location.search); // 주소창 값

            // 페이지 새로고침 / 검색 조회 등을 할 경우 location.search와 redux store에 있는 값들이 다름
            // 1. location.search에 있는 params와 redux store에 있는 search state를 비교
            // 2. 만약 redux store에 있는 search state와 location.search가 다르다면
            // 3. dispatch를 해서 상태가 동일하도록
            Object.keys(searchParams).forEach((objectKey) => {
                const key = objectKey as keyof typeof searchParams;

                const reduxStateName = searchParams[key] as string; // searchParams[key] : searchSlice에 있는 search state의 key
                const currentReduxState = reduxStateName ? searchStates[reduxStateName] : ''; // searchStates[searchParams[key]] : redux store에 있는 search state의 value
                const currentSearchParam = reduxStateName ? search[reduxStateName] : ''; // search[key] : location.search 값

                Object.assign(params, getNewQueryParams({ key, currentReduxState, currentSearchParam }));
                Object.assign(
                    newObject,
                    getNewSearchStates({ key, reduxStateName, currentReduxState, currentSearchParam })
                );
            });

            // API로 보낼때 page 번호가 0부터 시작하도록
            // location.search에는 page 번호가 1부터 시작
            if (params?.page) {
                Object.assign(params, { page: params.page > 1 ? +params.page - 1 : 0 });
            }

            // redux store로 값을 dispatch해야할 때 실행되도록
            if (Object.keys(newObject).length > 0) {
                dispatch(setSearchFilters(newObject));
            }

            setNewParams(params);
        } catch (error) {
            // page, pageSize만 default로 넘겨주기 (page는 0부터 시작)
            setNewParams({ page: 0, pageSize: 10 });
        }
    }, [dispatch, searchParams, searchStates, location.search]);

    useEffect(() => {
        handleSearchParams();
    }, [handleSearchParams]);

    return newParams;
};

export default useSearchParams;
