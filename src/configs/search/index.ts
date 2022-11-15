import { formatDate } from 'utils/common';

export const DATE_FORMAT = {
    daily: 'yyyy-MM-dd',
    monthly: 'yyyy-MM',
    hour: 'yyyy-MM-dd HH:mm'
};

export const DATE_FORMAT_VIEW = {
    daily: ['day'],
    monthly: ['month', 'year'],
    hour: ['month', 'day', 'hours', 'minutes']
};

export const SEARCH_COMPONENT = {
    Dashboard: {
        date: true,
        dateSelect: false,
        searchRadio: true,
        searchSelect: true,
        searchCheckbox: true,
        searchCondition: true,
        searchKeyword: true,
        sort: true,
        pageSize: true
    },
    Chart: {
        date: false,
        dateSelect: false,
        searchRadio: false,
        searchSelect: false,
        searchCheckbox: false,
        searchCondition: false,
        searchKeyword: false,
        sort: true,
        pageSize: true
    }
};

export const SEARCH_CAPTION = {
    gender: '성별',
    useYn: '판매여부',
    dessert: '디저트',
    sweets: '캔디',
    food: '음식',
    drink: '음료',
    color: '색상'
};

export const DEFAULT_DATES = {
    Dashboard: { startDate: formatDate('daily', new Date()), endDate: formatDate('daily', new Date()), dateTerm: 1 },
    Chart: { startDate: null, endDate: null, dateTerm: 0 }
};

export const DATE_TERM_BY_MENU = {
    Dashboard: 'today',
    Example: 'monthly'
};

export const SEARCH_DATE_TERM_PERIOD = {
    Dashboard: [
        { label: '오늘', value: 'today', month: 0 },
        { label: '1주', value: 'week', month: 0 },
        { label: '1개월', value: 'month', month: 1 },
        { label: '3개월', value: 'month', month: 3 },
        { label: '6개월', value: 'month', month: 6 },
        { label: '1년', value: 'month', month: 12 }
    ],
    Example: [
        { label: '3개월', value: 'month', month: 3 },
        { label: '6개월', value: 'month', month: 6 },
        { label: '1년', value: 'month', month: 12 }
    ]
};

export type CaptionType = keyof typeof SEARCH_CAPTION;

export const SEARCH_RADIO_ROW = {
    Dashboard: ['sweets', 'food', 'drink'],
    Chart: null
};

export const SEARCH_SELECT = {
    Dashboard: ['gender', 'useYn', 'dessert'],
    Chart: null
};

export const SEARCH_CHECKBOX = {
    Dashboard: ['color', 'color'],
    Chart: null
};

export const SEARCH_OPTION = {
    gender: [
        { value: '', label: '전체' },
        { value: 'M', label: '남성' },
        { value: 'F', label: '여성' }
    ],
    useYn: [
        { value: '', label: '전체' },
        { value: 'Y', label: '판매' },
        { value: 'N', label: '미판매' }
    ],
    dessert: [
        { value: '', label: '전체' },
        { value: 'cupcake', label: '컵케이크' },
        { value: 'cake', label: '케이크' }
    ],
    sweets: [
        { value: '', label: '전체' },
        { value: 'candy', label: '캔디' },
        { value: 'chocolate', label: '초콜릿' }
    ],
    food: [
        { value: '', label: '전체' },
        { value: 'hamburger', label: '햄버거' },
        { value: 'fried chicken', label: '치킨' }
    ],
    drink: [
        { value: '', label: '전체' },
        { value: 'tea', label: '티' },
        { value: 'water', label: '물' }
    ],
    color: [
        { value: 'all', label: '전체' },
        { value: 'red', label: 'red' },
        { value: 'green', label: 'green' }
    ],
    searchCondition: [
        { value: '', label: '전체' },
        { value: 'id', label: '아이디' },
        { value: 'name', label: '이름' },
        { value: 'tel', label: '연락처' }
    ],
    term: [
        { value: 'daily', label: '일간' },
        { value: 'monthly', label: '월간' }
    ],
    dateType: [
        { value: 'regDate', label: '등록일' },
        { value: 'modDate', label: '수정일' }
    ],
    sort: [
        { value: 'latest', label: '최신 순' },
        { value: 'oldest', label: '오래된 순' }
    ],
    pageSize: [
        { value: 10, label: '10개씩 보기' },
        { value: 30, label: '30개씩 보기' },
        { value: 50, label: '50개씩 보기' }
    ]
};

export const SEARCH_PARAM = {
    Dashboard: {
        // API Query Param Name : Redux State Name
        dateTerm: 'dateTerm', // UI에서만 사용
        startDate: 'startDate',
        endDate: 'endDate',
        gender: 'gender',
        useYn: 'useYn',
        dessert: 'dessert',
        foodType: 'food',
        sweetsType: 'sweets',
        drinkType: 'drink',
        colorType: 'color',
        searchCondition: 'searchCondition',
        searchKeyword: 'searchKeyword',
        sort: 'sort',
        page: 'page',
        pageSize: 'pageSize'
    },
    Chart: {
        term: 'term',
        startDate: 'startDate',
        endDate: 'endDate'
    }
};
