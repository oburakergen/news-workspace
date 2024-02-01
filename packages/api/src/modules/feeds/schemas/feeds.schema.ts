import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { IFeeds } from "@app/modules/feeds/interfaces/feeds.interface";
import { HydratedDocument } from "mongoose";

@Schema()
export class Feeds implements IFeeds {
  @Prop({ required: false })
  title: string;

  @Prop({ required: true })
  photo: string;

  @Prop()
  readonly photos: [string | null];

  @Prop({ required: true })
  description: string;

  @Prop({ required: true })
  tags: string[];

  @Prop({ default: new Date() })
  createdAt: Date;

  @Prop({ default: new Date() })
  updatedAt: Date;
}

export type FeedDocument = HydratedDocument<Feeds>;
export const Feedschema = SchemaFactory.createForClass(Feeds);
