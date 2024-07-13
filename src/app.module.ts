import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { App2Controller } from './app-2.controller';

@Module({
  imports: [],
  controllers: [AppController, App2Controller],
  providers: [AppService],
})
export class AppModule {}
