import type { NestFastifyApplication } from "@nestjs/platform-fastify";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

export default (app: NestFastifyApplication) => {
  const options = new DocumentBuilder()
    .setTitle("News Api")
    .setDescription("News Api api list")
    .setVersion("1.0")
    .setExternalDoc("News Api", "https://newsapi.org/")
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, options);

  SwaggerModule.setup("swagger/docs", app, document);
};
