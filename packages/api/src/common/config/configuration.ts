import { ConfigService } from "@nestjs/config";

const configService = new ConfigService();
export default () => ({
  APP_NAME: configService.get("APP_NAME") || "news",
  APP_PORT: parseInt(configService.get("APP_PORT") || "3001", 10),
  APP_DESCRIPTION: configService.get("APP_DESCRIPTION") || "News Description",
  APP_COOKIE_SECRET: configService.get("APP_COOKIE_SECRET") || "news",
  APP_DEBUG: {
    DEBUG: configService.get("APP_DEBUG") || false,
    LOG_LEVEL: configService.get("APP_LOG_LEVEL") || "debug",
    JSON_LOGGER: configService.get("APP_JSON_LOGGER") || false,
  },
  APP_DB: {
    MONGO_URI: configService.get("APP_MONGO_URI") || "",
    MONGO_CONNECTION_NAME: configService.get("APP_MONGO_CONNECTION_NAME") || "news",
  },
  AWS: {
    ACCESS_KEY_ID: configService.get("AWS_ACCESS_KEY_ID") || "",
    SECRET_ACCESS_KEY: configService.get("AWS_SECRET_ACCESS_KEY") || "",
    REGION: configService.get("AWS_REGION") || "",
    BUCKET_NAME: configService.get("AWS_BUCKET_NAME") || "",
  },
  JWT: {
    SECRET: configService.get("JWT_SECRET") || "",
    EXPIRES_IN: configService.get("JWT_EXPIRES_IN") || "1d",
  },
});
