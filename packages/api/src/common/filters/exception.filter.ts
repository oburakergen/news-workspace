import lodash from "lodash";
import { ArgumentsHost, Catch, ExceptionFilter, HttpException, HttpStatus } from "@nestjs/common";
import { DEFAULT_ERROR, NOT_FOUND_ERROR } from "@app/common/constants/error.constants";
import { TExceptionOption, THttpErrorResponse } from "@app/common/interfaces/response.interface";

/**
 * @class HttpExceptionFilter
 */
@Catch()
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const request = host.switchToHttp().getRequest();
    const response = host.switchToHttp().getResponse();
    const status = exception.getStatus() || HttpStatus.INTERNAL_SERVER_ERROR;

    try {
      const errorOption: TExceptionOption = exception.getResponse() as TExceptionOption;
      const isString = (value: TExceptionOption): value is string => lodash.isString(value);
      const errCode = isString(errorOption) ? NOT_FOUND_ERROR.code : errorOption.code || NOT_FOUND_ERROR.code;
      const errMessage = isString(errorOption) ? errorOption : errorOption.msg;
      const errorInfo = isString(errorOption) ? null : errorOption.error;
      const parentErrorInfo = errorInfo ? String(errorInfo) : null;
      const isChildrenError = errorInfo && errorInfo.code && errorInfo.msg;
      const resultError = (isChildrenError && errorInfo.msg) || parentErrorInfo;
      const result: THttpErrorResponse = {
        code: errCode,
        msg: errMessage,
        error: resultError,
      };

      if (status === HttpStatus.NOT_FOUND) {
        result.error = `Hata Test`;
        result.msg = `TT ${request.method} -> ${request.url} TT`;
      }

      return response.status(status).send(result);
    } catch (e) {
      return response.status(status).send(DEFAULT_ERROR);
    }
  }
}
