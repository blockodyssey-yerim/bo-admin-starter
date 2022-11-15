import dayjs from 'dayjs';
import _ from 'lodash';

import { SearchType } from 'slices/searchSlice';

import { DateType, ValueType } from 'utils/types';

export const isEmpty = (value: ValueType) => {
    let result = false;
    if (typeof value === 'string' && (value === 'null' || value === 'undefined' || value === 'INVALID')) {
        result = true;
    } else if (typeof value !== 'number' && _.isEmpty(value)) {
        result = true;
    }

    return result;
};

// searchState -> location.search
export const queryToString = (query: SearchType) => {
    let result = '?';
    try {
        Object.keys(query)?.forEach((q) => {
            const key = q as keyof typeof query;
            if (query[key]) {
                result += `${q}=${encodeURIComponent(query[key]!)}&`;
            }
        });
    } catch (error) {
        // eslint-disable-next-line no-console
        console.log(error);
    }

    return result.substring(0, result.length - 1);
};

// location.search -> searchState
export const queryToObject = (search: string) => {
    const params: Record<string, string | number> = {};
    const keywords = search?.split('?')?.[1]?.split('&');

    keywords?.forEach((keyword) => {
        const [key, value] = keyword.split('=');
        const decodedValue = decodeURIComponent(value);

        if (['page', 'pageSize', 'dateTerm'].some((ele) => key.toLowerCase().includes(ele.toLowerCase()))) {
            params[key] = parseInt(decodedValue, 10);
        } else {
            params[key] = decodedValue;
        }
    });

    return params;
};

// 현재 메뉴에서 사용되는 검색 필터 리스트 구하기
// searchStates : 현재 searchSlice에 있는 모든 값
// searchParams : 현재 메뉴에서 사용할 검색 필터 이름들
export const getCurrentSearchParams = (searchStates: SearchType, searchParams: SearchType) => {
    const currentList: Record<string, string | number> = {};
    // searchState의 value = searchSlice의 state명
    Object.values(searchParams).map((paramName) => {
        const key = paramName as keyof typeof searchStates;
        if (!isEmpty(searchStates[key])) {
            currentList[key] = searchStates[key]!;
        }
        return currentList;
    });

    return currentList; // 현재 메뉴에서 사용할 검색 필터 object
};

// 날짜 형식 변환
export const formatDate = (type: string, date: Date | null) => {
    let formattedDate = dayjs(date).format('YYYY-MM-DD');
    if (type === 'monthly') {
        formattedDate = dayjs(date).format('YYYY-MM');
    } else if (type === 'time') {
        formattedDate = dayjs(date).format('YYYY-MM-DD HH:mm:ss');
    }

    return formattedDate;
};

// 날짜 계산
export const calculateDate = (today: Date, month: number | null) => {
    const calToday = new Date(today);

    if (month) {
        calToday.setMonth(calToday.getMonth() - month);
    }

    if (today.getDate() !== calToday.getDate()) {
        calToday.setDate(0);
    }

    return calToday;
};

// 기간 검색 버튼 클릭 (오늘, 1주일, 1개월, 3개월, 6개월, 기간 초기화)
export const handleDateClick = ({ name, months, dateTerm }: DateType) => {
    const dateObj: Record<string, string | number | null> = { startDate: null, endDate: null, dateTerm };
    const curDate = new Date();
    const formattedCurDate = formatDate('daily', curDate);
    let prevDate = new Date();

    if (name === 'today') {
        dateObj.startDate = formattedCurDate;
        dateObj.endDate = formattedCurDate;
    } else if (name === 'week') {
        prevDate = new Date(curDate.setDate(curDate.getDate() - 7));
    } else if (name === 'month') {
        prevDate = calculateDate(curDate, months);
    } else if (name === 'reset') {
        dateObj.startDate = null;
        dateObj.endDate = null;
        dateObj.dateTerm = 0;
    }

    if (name === 'week' || name === 'month') {
        dateObj.startDate = formatDate('daily', prevDate);
        dateObj.endDate = formattedCurDate;
        dateObj.dateTerm = dateTerm;
    }

    return dateObj;
};
