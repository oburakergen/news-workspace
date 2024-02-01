export type TExceptionOption =
  | string
  | {
      code: number;
      msg: string;
      error?: any;
    };

export interface IHttpResultPaginate<T> {
  list: T;
  total: number;
}

// HTTP
export interface IHttpResponseBase {
  code: number;
  msg: string;
}

// HTTP error
export type THttpErrorResponse = IHttpResponseBase & {
  error: any;
};

// HTTP success
export type THttpSuccessResponse<T> = IHttpResponseBase & {
  data: T | IHttpResultPaginate<T>;
};

// HTTP Response
export type THttpResponse<T> = THttpErrorResponse | THttpSuccessResponse<T>;
