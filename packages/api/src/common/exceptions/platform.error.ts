import { HttpException, HttpStatus } from "@nestjs/common";
import { TExceptionOption } from "@app/common/interfaces/response.interface";

/**
 * @class PlatformError
 * @classdesc 500 status
 */
export class PlatformError extends HttpException {
  constructor(options: TExceptionOption, statusCode?: HttpStatus) {
    super(options, statusCode || HttpStatus.INTERNAL_SERVER_ERROR);
  }
}
