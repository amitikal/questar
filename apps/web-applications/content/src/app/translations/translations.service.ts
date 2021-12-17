import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Translation, translationDocument } from './schemas/translation.schema';
import { Model } from 'mongoose';

@Injectable()
export class TranslationsService {
  constructor(@InjectModel(Translation.name) private TranslationModel: Model<translationDocument>) {}

  findAll() {
    try {
      return this.TranslationModel.find().exec();
    }
    catch (e) {
      console.log(e, 'error');
    }
  }
}
