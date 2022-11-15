export type ErrorType = {
    title?: string;
    statusCode: number | null;
    message: string;
};

export interface IResponseData<T = Record<string, any>> {
    statusCode: number;
    message: string;
    data: T;
}

export interface IResponseBodyWithoutData {
    statusCode: number;
    message: string;
}
