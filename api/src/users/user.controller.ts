import { Controller, Get } from '@nestjs/common';
import { User, UserService } from './user.service';

@Controller()
export class UserController {
	constructor(private readonly userService: UserService) {}

	@Get()
	getAll(): User[] {
		return this.userService.getAll();
	}

	@Get('/:id')
	getOne(): User {
		return this.userService.getOne();
	}
}
