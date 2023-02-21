import { ExceptionFilter, Catch, ArgumentsHost, HttpException } from '@nestjs/common';
import { Request, Response } from 'express';

@Catch(HttpException)
export class HttpExceptionHandler implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    const status = exception.getStatus();
    console.log(exception);
    

    response
      .status(status)
      .json({
        statusCode: status,
        timestamp: new Date().toISOString(),
        requestType: request.method,
        path: request.url,
        errorType: exception.name,
        error: exception.getResponse()['error'],
        message: exception.getResponse()['message'],
      });
  }
}