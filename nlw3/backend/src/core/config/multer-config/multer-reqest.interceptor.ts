import {
  BadRequestException,
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor
} from '@nestjs/common';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';

import {MulterError} from 'multer';

@Injectable()
export class MulterReqestInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {

    return next
      .handle()
      .pipe(
        catchError(err => {
          if (err instanceof MulterError) {
            return throwError(new BadRequestException(null, err.code));
          }
          return throwError(err);
        }),
      );
  }
}
