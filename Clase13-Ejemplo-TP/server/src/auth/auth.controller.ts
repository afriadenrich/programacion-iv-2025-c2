import { Controller } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  // Post de login
  // Post de registro
  // Post de autenticar
  // Post de refrescar
}
