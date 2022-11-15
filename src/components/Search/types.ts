import { SEARCH_PARAM } from 'configs/search';

export type SearchDatesType = { startDate: string | null; endDate: string | null; dateTerm: number };
export type SearchParamType = keyof typeof SEARCH_PARAM;

export interface ISearch {
    total?: number;
    dataList?: Record<string, { label: string; value: string | number }[]>;
}
