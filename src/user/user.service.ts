import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import { User } from './user.interface';
@Injectable()
export class UserService {
  test(): string[] {
    return [];
  }
  findAll(): User[] {
    const data = fs.readFileSync('data/users.json', 'utf-8');
    return JSON.parse(data);
  }
}
