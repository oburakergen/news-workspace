import { HttpException, HttpStatus } from "@nestjs/common";
import { FORBIDDEN_ERROR } from "@app/common/constants/error.constants";
import { TExceptionOption } from "@app/common/interfaces/response.interface";

/**
 * @class HttpForbiddenError
 * @classdesc 403 status
 */
export class HttpForbiddenError extends HttpException {
  constructor(error?: TExceptionOption) {
    super(error || FORBIDDEN_ERROR, HttpStatus.FORBIDDEN);
  }
}
