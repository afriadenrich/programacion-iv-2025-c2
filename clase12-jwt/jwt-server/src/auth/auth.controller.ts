import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CredencialesDTO } from './dto/credencialesDto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  login(@Body() body: CredencialesDTO) {
    return this.authService.login(body);
  }

  @Post('register')
  register(@Body() body: CredencialesDTO) {
    return this.authService.register(body);
  }
}
