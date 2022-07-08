import { Controller, Get, Req, Res } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {

  }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get("/hello")
  helloNoble(@Req() req, @Res() res): string {
    console.log(req, res);
    return this.appService.helloNoble()
  }

}
