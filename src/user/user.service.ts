import { Injectable } from '@nestjs/common';
import { User } from '../../generated/prisma';

@Injectable()
export class UserService {
  private readonly users = [
    { id: 1, email: 'john@johndoe.com', password: 'changeme' },
    { id: 2, email: 'sara@sara', password: 'guess' },
  ];

  // eslint-disable-next-line @typescript-eslint/require-await
  async findOne(email: string): Promise<User | undefined> {
    return this.users.find((user) => user.email === email);
  }
}
