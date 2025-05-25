import { Body, Controller, Delete, Get, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/guard/jwt-auth.guard';
import { UserService } from './user.service';
import { CreateFavoriteDto } from './dto/createFavorite.dto';
import { User } from '../auth/decorator/user.decorator';
import { User as UserType } from '../../generated/prisma';

@UseGuards(JwtAuthGuard)
@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  // Get user's saved Repos
  @Get('favorites')
  async getFavoriteRepos(@User('id') userId: number) {
    return await this.userService.getFavorites(userId);
  }

  // save a new repo
  @Post('favorites')
  async addToFavoriteRepos(
    @Body() createFavoriteDto: CreateFavoriteDto,
    @User() user: UserType,
  ) {
    return await this.userService.addFavorite(createFavoriteDto, user);
  }

  // remove a saved repo
  @Delete('favorites/:id')
  async deleteFavoriteRepoById() {}
}
