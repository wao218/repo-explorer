import { Controller, Delete, Get, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/guard/jwt-auth.guard';
import { UserService } from './user.service';

@UseGuards(JwtAuthGuard)
@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  // Get user's saved Repos
  @Get('favorites')
  async getFavoriteRepos() {}

  // save a new repo
  @Post('favorites')
  async addToFavoriteRepos() {}

  // remove a saved repo
  @Delete('favorites/:id')
  async deleteFavoriteRepoById() {}
}
