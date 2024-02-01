import { NestFactory } from "@nestjs/core";
import { NestFastifyApplication } from "@nestjs/platform-fastify";
import { AppModule } from "./app.module";
// Utils
import Config from "@app/utils/config";
import Adapter from "@app/utils/adapter";
import { ConfigService } from "@nestjs/config";

async function bootstrap() {
  const configService = new ConfigService();
  const adapter = await Adapter(configService);
  const app: NestFastifyApplication = await NestFactory.create<NestFastifyApplication>(AppModule, adapter);

  await Config(app, configService);
}
bootstrap().then(() => {
  console.log("Application is started");
});
