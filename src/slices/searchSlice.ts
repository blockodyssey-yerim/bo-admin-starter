import { createSlice } from '@reduxjs/toolkit';

import { formatDate } from 'utils/common';

const today = formatDate('daily', new Date());

export type SearchType = {
    gender?: string;
    useYn?: string;
    dessert?: string;
    food?: string;
    sweets?: string;
    drink?: string;
    color?: string;

    searchCondition?: string;
    searchKeyword?: string;

    sort?: string;
    page?: string | number;
    pageSize?: string | number;

    dateType?: string;
    term?: string;
    dateTerm?: string | number;
    dashboardDateTerm?: string | number;
    startDate?: string | null;
    endDate?: string | null;
};

export const initialState: SearchType = {
    useYn: '',
    gender: '',
    dessert: '',
    sweets: '',
    food: '',
    drink: '',
    color: 'all',

    searchCondition: '',
    searchKeyword: '',

    sort: 'latest',
    page: 1,
    pageSize: 10,

    dateType: 'regDate',
    term: 'daily',
    dateTerm: 0,
    dashboardDateTerm: 1,
    startDate: today,
    endDate: today
};

export type SearchKey = keyof typeof initialState;

export const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        setSearchFilter: (state, { payload }) => {
            state[payload.type as SearchKey] = payload.value;
        },
        setSearchFilters: (state, { payload }) => {
            return { ...state, ...payload };
        },
        reset: () => initialState
    }
});

export const { setSearchFilter, setSearchFilters, reset } = searchSlice.actions;

export const searchSelector = (state: { search: SearchType }) => state.search;

export default searchSlice.reducer;
