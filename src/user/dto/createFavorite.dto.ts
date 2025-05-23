import { IsNumber, IsString } from 'class-validator';

export class CreateFavoriteDto {
  @IsString()
  name: string;

  @IsString()
  description: string;

  @IsNumber()
  starCount: number;

  @IsString()
  url: string;

  @IsString()
  language: string;
}
