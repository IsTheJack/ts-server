import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsString } from 'class-validator';

enum Gender {
  male = 'male',
  female = 'female',
  other = 'other',
}

export class CreateUserDto {
  @ApiProperty()
  @IsString()
  name: string;

  @ApiProperty()
  @IsString()
  birthday: string;

  @ApiProperty({ enum: Object.values(Gender) })
  @IsEnum(Gender)
  gender: Gender;
}
