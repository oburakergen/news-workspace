import { ConfigService } from "@nestjs/config";
import { FastifyAdapter } from "@nestjs/platform-fastify";
import * as helmet from "@fastify/helmet";
import * as csrf from "@fastify/csrf-protection";
import * as cookie from "@fastify/cookie";

import Helmet from "@app/utils/helmet";

export default async (configService: ConfigService) => {
  const adapter = new FastifyAdapter();

  adapter.enableCors({
    origin: true,
    methods: ["GET", "POST", "PATCH", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization", "X-Requested-With", "X-XSRF-TOKEN"],
    credentials: true,
  });

  await adapter.register(helmet, Helmet);
  await adapter.register(cookie, {
    _csrf: configService.get<string>("APP_COOKIE_SECRET"),
  });
  await adapter.register(csrf, {
    cookie: {
      key: "_csrf",
      path: "/",
      sameSite: true,
      crossOriginEmbedderPolicy: true,
      crossOriginOpenerPolicy: true,
      httpOnly: true,
      secure: configService.get<string>("APP_ENV") === "production",
    },
  });

  return adapter;
};
