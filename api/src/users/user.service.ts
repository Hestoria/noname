import { Injectable } from '@nestjs/common';

export type User = {
  id: number;
};

@Injectable()
export class UserService {
  getAll(): User[] {
    return [{ id: 1 }, { id: 2 }];
  }

  getOne(): User {
    return { id: 1 };
  }
}
