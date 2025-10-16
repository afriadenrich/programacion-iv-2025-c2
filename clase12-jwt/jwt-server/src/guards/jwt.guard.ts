import {
  BadRequestException,
  CanActivate,
  ExecutionContext,
  HttpException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import type { Request } from 'express';
import { JsonWebTokenError, TokenExpiredError, verify } from 'jsonwebtoken';
import { Observable } from 'rxjs';

const CONTRASENA_SECRETA_DEL_SERVER =
  'ESTO DEBERÍA ESTAR EN UN ENV Y SER MUY LARGA Y MUY SEGURA';

@Injectable()
export class JwtGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request: Request = context.switchToHttp().getRequest();
    // Leer el tóken de la request (header)

    const authHeader: string | undefined = request.headers.authorization;

    if (!authHeader) throw new BadRequestException();

    const [tipo, token] = authHeader.split(' ');

    if (tipo !== 'Bearer') throw new BadRequestException();

    // Verificarlo

    try {
      const tokenValidado = verify(token, CONTRASENA_SECRETA_DEL_SERVER);
      // Pasar los datos importantes del payload (ej. id usuario)
      // return true

      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      (request as any).user = tokenValidado;

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
}
