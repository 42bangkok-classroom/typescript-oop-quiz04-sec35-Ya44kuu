import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.interface';
@Controller('users')
export class UserController {
  constructor(private readonly appService: UserService) {}

  @Get('test')
  test(): string[] {
    return this.appService.test();
  }
  @Get()
  findAll(): User[] {
    return this.appService.findAll();
  }
  @Get(':id')
  findOne(id: string, fields?: string[]){
    return this.appService.findOne();
  }
}
