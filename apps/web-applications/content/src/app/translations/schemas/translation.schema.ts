import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type translationDocument = Translation & Document;

@Schema()
export class Translation {
  @Prop({ unique: true, required: true })
  name: string;

  @Prop()
  data: Record<string, string>;

  @Prop()
  createdAt: Date;

  @Prop()
  updatedAt: Date;
}

export const TranslationSchema = SchemaFactory.createForClass(Translation);
