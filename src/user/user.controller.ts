import { Controller, Get, Param } from '@nestjs/common';
import { UserService } from './user.service';
import type { User } from './user.interface';
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
  findOne(@Param('id') id: string) {
    const fid = this.appService.findOne(Number(id));
    const { firstName, lastName, email } = fid;
    return { firstName, lastName, email };
  }
}
