import { HttpException, HttpStatus } from "@nestjs/common";
import { BAD_REQUEST_ERROR } from "@app/common/constants/error.constants";
import { TExceptionOption } from "@app/common/interfaces/response.interface";

/**
 * @class HttpBadRequestError
 * @classdesc 400 status
 */
export class HttpBadRequestError extends HttpException {
  constructor(error?: TExceptionOption) {
    super(error || BAD_REQUEST_ERROR, HttpStatus.BAD_REQUEST);
  }
}
