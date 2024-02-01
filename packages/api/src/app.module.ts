import { Module } from "@nestjs/common";
// Modules imports here
import { FeedsModule } from "@app/modules/feeds/feeds.module";
import { CoreModule } from "@app/core/core.module";
import { AuthModule } from "@app/modules/auth/auth.module";
import { UsersModule } from "@app/modules/users/users.module";
// Modules imports here
// Middleware imports here
import { ConfigsModule } from "@app/common/config.module";
import { CsrfModule } from "@app/modules/csrf/csrf.module";
// Middleware imports here

@Module({
  imports: [CoreModule, FeedsModule, AuthModule, UsersModule, ConfigsModule, CsrfModule],
})
export class AppModule {}
