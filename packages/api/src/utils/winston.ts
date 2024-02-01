import { transports, format } from "winston";
import { WinstonModule, utilities as nestWinstonModuleUtilities } from "nest-winston";
import configuration from "@app/common/config/configuration";
export class Winston {
  private readonly appName: string;
  private configService = configuration();

  constructor(appName: string) {
    this.appName = appName;
  }

  public createLogger() {
    let consoleFormat;

    const DEBUG = this.configService.APP_DEBUG.DEBUG;
    const USE_JSON_LOGGER = this.configService.APP_DEBUG.JSON_LOGGER;

    const ad = {
      dirname: "logs",
      filename: "app-%DATE%.log",
      datePattern: "YYYY-MM-DD",
      zippedArchive: true,
      maxSize: "20m",
      maxFiles: "14d",
    };

    if (USE_JSON_LOGGER === "true") {
      consoleFormat = format.combine(format.ms(), format.timestamp(), format.json());
    } else {
      consoleFormat = format.combine(
        format.timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
        format.ms(),
        format.colorize({
          colors: {
            info: "green",
            error: "red",
            warn: "yellow",
            debug: "blue",
          },
        }),
        format.printf(({ level, message, timestamp, ms }) => {
          return `${timestamp} ${level} [${this.appName}] ${message} ${ms}`;
        }),
        nestWinstonModuleUtilities.format.nestLike(this.appName, {
          colors: true,
          prettyPrint: true,
        })
      );
    }

    return WinstonModule.createLogger({
      level: DEBUG ? "debug" : "info",
      transports: [new transports.Console({ format: consoleFormat })],
    });
  }
}
