import { Injectable, NotFoundException } from '@nestjs/common';
import * as fs from 'fs';
import { User } from './user.interface';
@Injectable()
export class UserService {
  private users: User[] = [
    {
      id: '1',
      firstName: 'สมชาย',
      lastName: 'ใจดี',
      email: 'somchai.jaidee@example.com',
      username: 'somchai_j',
    },
    {
      id: '2',
      firstName: 'สมหญิง',
      lastName: 'รักเรียน',
      email: 'somying.rakrian@example.com',
      username: 'somying_r',
    },
  ];
  test(): string[] {
    return [];
  }
  findAll(): User[] {
    const data = fs.readFileSync('data/users.json', 'utf-8');
    return JSON.parse(data) as User[];
  }
  findOne(id: number, fields?: string[]): User | Partial<User> {
    const user = this.users.find((u) => Number(u.id) === id);

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
