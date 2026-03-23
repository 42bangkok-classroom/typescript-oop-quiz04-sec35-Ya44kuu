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
  findOne(@Param('id') id: string, @Query('fields') fields: string) {
    const fid = this.appService.findOne(Number(id));
    if (!fields) return fid;

    const fieldList = fields.split(',');
    const result = {};
    fieldList.forEach((field) => {
      if (fid[field] !== undefined) {
        result[field] = fid[field];
      }
    });
    return result;
  }
}
