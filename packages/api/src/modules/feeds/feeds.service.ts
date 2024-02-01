import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { FilterQuery, Model } from "mongoose";
import { IFeeds } from "@app/modules/feeds/interfaces/feeds.interface";
import { Feeds } from "@app/modules/feeds/schemas/feeds.schema";

@Injectable()
export class FeedsService {
  constructor(@InjectModel(Feeds.name) private readonly feedModel: Model<Feeds>) {}

  create(item: IFeeds): Promise<IFeeds> {
    return this.feedModel.create(item);
  }

  findAll(): Promise<IFeeds[]> {
    return this.feedModel.find().exec();
  }

  findOne(id: string): Promise<IFeeds | null> {
    return this.feedModel.findById(id).exec();
  }

  async update(id: string, item: IFeeds): Promise<IFeeds | null> {
    await this.feedModel.updateOne({ _id: id }, item).exec();

    return this.findOne(id);
  }

  deleteOne(id: string): FilterQuery<IFeeds> {
    return this.feedModel.findByIdAndDelete(id).exec();
  }
}
