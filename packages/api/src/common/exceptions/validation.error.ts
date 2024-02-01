import { HttpException, HttpStatus } from "@nestjs/common";
import { VALIDATION_ERROR } from "@app/common/constants/error.constants";
import { TExceptionOption } from "@app/common/interfaces/response.interface";

/**
 * @class ValidationError
 * @classdesc 400 status
 */
export class ValidationError extends HttpException {
  constructor(error?: TExceptionOption) {
    super(error || VALIDATION_ERROR, HttpStatus.BAD_REQUEST);
  }
}
