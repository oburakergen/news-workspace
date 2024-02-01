import { Controller, Post, UseInterceptors } from "@nestjs/common";
import { CsrfService } from "@app/modules/csrf/csrf.service";
import { ExceptionInterceptor } from "@app/common/interceptors/exception.interceptor";
import { ApiOperation, ApiTags } from "@nestjs/swagger";

@UseInterceptors(ExceptionInterceptor)
@Controller("csrf")
@ApiTags("Csrf")
export class CsrfController {
  constructor(private readonly csrfService: CsrfService) {}

  @Post()
  @ApiOperation({ summary: "Create Csrf", description: "Create Csrf", operationId: "create" })
  async create() {
    return await this.csrfService.create();
  }
}
