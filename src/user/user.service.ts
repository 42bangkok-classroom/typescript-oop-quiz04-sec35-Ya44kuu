import { Injectable, NotFoundException } from '@nestjs/common';
import * as fs from 'fs';
import { User } from './user.interface';
@Injectable()
export class UserService {
  test(): string[] {
    return [];
  }
  findAll(): User[] {
    const data = fs.readFileSync('data/users.json', 'utf-8');
    return JSON.parse(data) as User[];
  }
  findOne(id: number): User {
    const all = this.findAll();
    const find_one = all.find((b) => Number(b.id) === id);
    if (!find_one) {
      throw new NotFoundException('User not found');
    }
    return find_one;
  }
}
