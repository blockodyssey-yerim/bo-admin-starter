import { SearchKey } from 'slices/searchSlice';

export type ObjectType = Record<string | SearchKey, string | number | boolean | null>;

export interface INewQueryParams {
    key: string;
    currentReduxState: string;
    currentSearchParam: string | boolean | number | null;
}

export interface INewSearchStates extends INewQueryParams {
    reduxStateName: string | SearchKey;
}
