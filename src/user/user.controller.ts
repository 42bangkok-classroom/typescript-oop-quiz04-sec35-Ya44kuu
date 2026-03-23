import { Controller, Get, Param, Query } from '@nestjs/common';
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
  findOne(
    @Param('id') id: string,
    @Query('fields') fields: string,
  ): User | Partial<User> {
    const fid = this.appService.findOne(Number(id));
    if (!fields) return fid;

    const fieldList = fields.split(',');
    const result: Partial<User> = {};
    fieldList.forEach((field) => {
      if (field in fid) {
        const key = field as keyof User;
        result[key] = fid[key];
      }
    });
    return result;
  }
}
