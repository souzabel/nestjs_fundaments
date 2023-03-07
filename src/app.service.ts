import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World! ela é chamada pelo main, todo request é através de controller';
  }
}
