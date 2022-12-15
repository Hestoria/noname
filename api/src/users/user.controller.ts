import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getAll(): ReturnType<typeof this.userService.getAll> {
    return this.userService.getAll();
  }

  @Get('/:id')
  getOne(): ReturnType<typeof this.userService.getOne> {
    return this.userService.getOne();
  }
}
