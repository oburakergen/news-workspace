import type { NestFastifyApplication } from "@nestjs/platform-fastify";
import { Transport } from "@nestjs/microservices";

export default (app: NestFastifyApplication) => {
  app.connectMicroservice({
    transport: Transport.REDIS,
    options: {
      host: "localhost",
      port: 6379,
    },
  });
};
