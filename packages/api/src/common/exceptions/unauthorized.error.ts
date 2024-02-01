import { UnauthorizedException } from "@nestjs/common";
import { FORBIDDEN_ERROR } from "@app/common/constants/error.constants";
import { TExceptionOption } from "@app/common/interfaces/response.interface";

/**
 * @class HttpUnauthorizedError
 * @classdesc 401 status
 */
export class HttpUnauthorizedError extends UnauthorizedException {
  constructor(message?: TExceptionOption, error?: string) {
    super(message || FORBIDDEN_ERROR, error);
  }
}
