import { SEARCH_PARAM } from 'configs/search';

export type ObjectType = Record<string, string | number | boolean | null>;
export type SearchParamType = keyof typeof SEARCH_PARAM;

export interface ICaptionSearch {
    total?: number;
    dataList?: Record<string, { label: string; value: string | number }[]>;
}
