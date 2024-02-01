import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  UseGuards,
  Delete,
  HttpException,
  HttpStatus,
  Patch,
  UseInterceptors,
} from "@nestjs/common";
import { ApiBearerAuth, ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import type { IFeeds } from "@app/modules/feeds/interfaces/feeds.interface";
import { RolesGuard } from "@app/common/guards/role.guard";
import { FeedsService } from "@app/modules/feeds/feeds.service";
import { FeedsEntity } from "@app/modules/feeds/entities/feeds.entity";
import { CreateFeedsDto } from "@app/modules/feeds/dto/create-feeds.dto";
import { UpdateFeedsDto } from "@app/modules/feeds/dto/update-feeds.dto";
import { ExceptionInterceptor } from "@app/common/interceptors/exception.interceptor";

@ApiBearerAuth()
@UseGuards(RolesGuard)
@Controller("feeds")
@UseInterceptors(ExceptionInterceptor)
@ApiTags("Feeds")
export class FeedsController {
  constructor(private readonly feedsService: FeedsService) {}

  @Post()
  @ApiOperation({ summary: "Create Feed", description: "Create Feed", operationId: "create" })
  async create(@Body() createFeedDto: CreateFeedsDto) {
    console.log(createFeedDto);
    throw new HttpException("Bad Request", HttpStatus.BAD_REQUEST);
    return await this.feedsService
      .create(createFeedDto)
      .then((res: IFeeds) => {
        console.log(res);
        return res;
      })
      .catch((err) => {
        return err;
      });
  }

  @ApiOperation({ summary: "Find All Feeds", description: "Find All Feeds", operationId: "findAll" })
  @Get()
  async findAll(): Promise<CreateFeedsDto[] | any> {
    return this.feedsService.findAll();
  }

  @Get(":id")
  @ApiOperation({ summary: "Find The Feed", description: "Find The Feed", operationId: "findOne" })
  @ApiResponse({
    status: 200,
    description: "The found record",
    type: FeedsEntity,
  })
  findOne(@Param("id") id: string) {
    return this.feedsService.findOne(id);
  }

  @Patch(":id")
  @ApiOperation({ summary: "Update The Feed", description: "Update The Feed", operationId: "update" })
  updateOne(@Param("id") id: string, @Body() updateFeedDto: UpdateFeedsDto) {
    return this.feedsService.update(id, updateFeedDto);
  }

  @Delete(":id")
  @ApiOperation({ summary: "Delete The Feed", description: "Delete The Feed", operationId: "delete" })
  deleteOne(@Param("id") id: string) {
    return this.feedsService.deleteOne(id);
  }
}
