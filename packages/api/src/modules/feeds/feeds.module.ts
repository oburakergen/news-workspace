import { Module } from "@nestjs/common";
import { FeedsController } from "./feeds.controller";
import { FeedsService } from "./feeds.service";
import { MongooseModule } from "@nestjs/mongoose";
import { Feeds, Feedschema } from "./schemas/feeds.schema";

@Module({
  imports: [MongooseModule.forFeature([{ name: Feeds.name, schema: Feedschema }])],
  controllers: [FeedsController],
  providers: [FeedsService],
})
export class FeedsModule {}
