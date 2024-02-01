import {
  CallHandler,
  ExecutionContext,
  HttpException,
  RequestTimeoutException,
  Injectable,
  NestInterceptor,
  HttpStatus,
} from "@nestjs/common";
import { Observable, throwError, TimeoutError } from "rxjs";
import { catchError, timeout } from "rxjs/operators";

@Injectable()
export class ExceptionInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      timeout(5000),
      catchError((err) => {
        if (err instanceof HttpException) {
          return throwError(() => new HttpException(err.message, err.getStatus()));
        } else if (err instanceof TimeoutError) {
          return throwError(() => new RequestTimeoutException());
        }

        return throwError(() => new HttpException(err.message, HttpStatus.INTERNAL_SERVER_ERROR));
      })
    );
  }
}
