/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { Injectable } from '@nestjs/common';
import { CredencialesDTO } from './dto/credencialesDto';
import { sign } from 'jsonwebtoken';

const CONTRASENA_SECRETA_DEL_SERVER =
  'ESTO DEBERÍA ESTAR EN UN ENV Y SER MUY LARGA Y MUY SEGURA';

@Injectable()
export class AuthService {
  login(user: CredencialesDTO) {
    // Lee de la base de datos y confirma usuario válido y comprara contraseñas encriptadas.

    const payload: any = {
      user: user.usuario,
      admin: false,
    };

    // Necesito crear un token, sign es el método
    const token: string = sign(payload, CONTRASENA_SECRETA_DEL_SERVER, {
      expiresIn: '15m',
    });

    return { token: token };
  }

  register(user: CredencialesDTO) {
    // Valida usuario no existe y guarda
    const payload: any = {
      user: user.usuario,
      admin: false,
    };

    // Necesito crear un token, sign es el método
    const token: string = sign(payload, CONTRASENA_SECRETA_DEL_SERVER, {
      expiresIn: '15m',
    });

    return { token: token };
  }
}
