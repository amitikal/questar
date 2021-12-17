import { Module } from '@nestjs/common';
import { TranslationsController } from './translations.controller';
import { TranslationsService } from './translations.service';
import { MongooseModule } from '@nestjs/mongoose';
import { TranslationSchema, Translation } from './schemas/translation.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Translation.name, schema: TranslationSchema }], 'translations')],
  controllers: [TranslationsController],
  providers: [TranslationsService]
})
export class TranslationsModule {}
