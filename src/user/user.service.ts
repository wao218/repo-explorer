import { Injectable } from '@nestjs/common';
import { User } from '../../generated/prisma';
import { CreateUserDto } from './dto/createUser.dto';
import * as bcrypt from 'bcrypt';
import { PrismaService } from '../prisma/prisma.service';
import { CreateFavoriteDto } from './dto/createFavorite.dto';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async findUserByEmail(email: string): Promise<User | null> {
    return await this.prisma.user.findUnique({
      where: {
        email,
      },
    });
  }

  async createUser(dto: CreateUserDto) {
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(dto.password, saltRounds);

    const user = await this.prisma.user.create({
      data: {
        email: dto.email,
        password: hashedPassword,
      },
    });

    const { password, ...newUser } = user;
    return newUser;
  }

  async addFavorite(dto: CreateFavoriteDto, user: User) {
    const favorite = await this.prisma.favorite.create({
      data: {
        userId: user.id,
        name: dto.name,
        description: dto.description,
        starCount: Number(dto.starCount),
        url: dto.url,
        language: dto.language,
      },
    });

    return favorite;
  }
}
