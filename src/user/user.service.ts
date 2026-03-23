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
  findOne(id: string, fields?: string[]): User | Partial<User> {
    const users = this.findAll();
    const user = users.find((u) => u.id === id);

    if (!user) {
      throw new NotFoundException('User not found');
    }

    if (!fields) return user;

    if (fields.length === 0) return {};

    const result: Partial<User> = {};

    fields.forEach((field) => {
      if (field in user) {
        const key = field as keyof User;
        result[key] = user[key];
      }
    });

    return result;
  }
}
