import {
  CanActivate,
  ExecutionContext,
  HttpException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import type { Request } from 'express';
import { JsonWebTokenError, TokenExpiredError, verify } from 'jsonwebtoken';
const CONTRASENA_SECRETA_DEL_SERVER =
  'ESTO DEBERÍA ESTAR EN UN ENV Y SER MUY LARGA Y MUY SEGURA';

@Injectable()
export class JwtCookieGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request: Request = context.switchToHttp().getRequest();

    const token = request.cookies['token'] as string;

    if (token && token !== '') {
      try {
        verify(token, CONTRASENA_SECRETA_DEL_SERVER);
        // return true

        return true;

        // Caso de error, throw de error
      } catch (error) {
        if (error instanceof TokenExpiredError) {
          throw new HttpException('Token expirado', 401);
        }

        if (error instanceof JsonWebTokenError) {
          throw new HttpException('Firma falló o tóken modificado', 401);
        }

        throw new InternalServerErrorException();
      }
    }

    return false;
  }
}
