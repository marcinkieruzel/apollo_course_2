import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  helloNoble() : string {
    return "Hello Noble";
  }
}
