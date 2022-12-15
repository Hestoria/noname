import { Injectable } from '@nestjs/common';
import { Res } from '../types';

@Injectable()
export class AppService {
	ping(): Res {
		return { message: 'pong' };
	}
}
