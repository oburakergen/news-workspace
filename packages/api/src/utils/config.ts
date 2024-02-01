import type { NestFastifyApplication } from "@nestjs/platform-fastify";
import { ValidationPipe } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import Swagger from "@app/utils/swagger";
import { HttpExceptionFilter } from "@app/common/filters/exception.filter";

export default async (app: NestFastifyApplication, configService: ConfigService) => {
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidUnknownValues: true,
      transform: true,
      transformOptions: {
        enableImplicitConversion: true,
      },
    })
  );
  // app.enableCors({
  //   origin: true,
  //   methods: ["GET", "POST", "PATCH", "DELETE"],
  //   allowedHeaders: ["Content-Type", "Authorization", "X-Requested-With", "X-XSRF-TOKEN"],
  //   credentials: true,
  // });
  app.setGlobalPrefix("api/v1");
  app.useGlobalFilters(new HttpExceptionFilter());
  // app.useLogger(loggerFactory.createLogger());

  // Redis(app);
  Swagger(app);
  await app.listen(configService.get<number>("APP_PORT", 3000));
};
