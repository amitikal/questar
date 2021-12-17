import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TranslationsModule } from './translations/translations.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [TranslationsModule, MongooseModule.forRoot('mongodb://localhost/nest')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
