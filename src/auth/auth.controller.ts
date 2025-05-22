import { Controller, Post, UseGuards, Body } from '@nestjs/common';
import { LocalAuthGuard } from './guard/local-auth.guard';
import { AuthService } from './auth.service';
import { AuthDto } from './dto/auth.dto';
import { User } from './decorator/user.decorator';
import { User as UserType } from '../../generated/prisma';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@User() dto: UserType) {
    return await this.authService.login(dto);
  }

  @Post('register')
  async registerUser(@Body() dto: AuthDto) {
    return await this.authService.register(dto);
  }
}
