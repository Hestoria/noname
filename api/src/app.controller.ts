import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('/api')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/ping')
  ping(): ReturnType<typeof this.appService.ping> {
    return this.appService.ping();
  }
}
