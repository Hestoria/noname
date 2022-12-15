import { Controller, Get } from '@nestjs/common';
import { Res } from '../types';
import { AppService } from './app.service';

@Controller('/api')
export class AppController {
	constructor(private readonly appService: AppService) {}

	@Get('/ping')
	ping(): Res {
		return this.appService.ping();
	}
}
