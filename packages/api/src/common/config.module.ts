import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { ConfigModule } from "@nestjs/config";
import { ThrottlerModule } from "@nestjs/throttler";
import configuration from "@app/common/config/configuration";
@Module({
  imports: [
    MongooseModule.forRoot(
      "mongodb+srv://news:uuyv46Eal3rbNlpH@cluster0.aadgqbb.mongodb.net/?retryWrites=true&w=majority"
    ),
    ConfigModule.forRoot({
      load: [configuration],
    }),
    ThrottlerModule.forRoot([
      {
        ttl: 60000,
        limit: 10,
      },
    ]),
  ],
})
export class ConfigsModule {}
