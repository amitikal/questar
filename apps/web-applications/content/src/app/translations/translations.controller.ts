import { Controller, Get } from '@nestjs/common';
import { TranslationsService } from './translations.service';

@Controller('translations')
export class TranslationsController {

  constructor(private translationService: TranslationsService) {
  }

  @Get('/')
  fetchTranslations() {
    return this.translationService.findAll();
  }
}
