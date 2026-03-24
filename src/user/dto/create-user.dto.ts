import { IsNotEmpty, IsString } from 'class-validator';

export class CreatUserDto {
  @IsString()
  @IsNotEmpty({ message: 'firstName should not be empty' })
  firstName: string;

  @IsString()
  @IsNotEmpty({ message: 'lastName should not be empty' })
  lastName: string;
  email: string;
  username: string;
}
