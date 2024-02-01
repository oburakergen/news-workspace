import { ApiProperty, PartialType } from "@nestjs/swagger";
import { CreateFeedsDto } from "@app/modules/feeds/dto/create-feeds.dto";

export class UpdateFeedsDto extends PartialType(CreateFeedsDto) {
  @ApiProperty({
    example: "Title",
    description: "The feeds title",
    required: true,
    format: "string",
    maxLength: 155,
    minimum: 10,
  })
  readonly title: string;

  @ApiProperty({
    example: "Photo",
    description: "The feeds photo",
    required: true,
    format: "string",
    minimum: 10,
  })
  readonly photo: string;

  @ApiProperty({
    examples: ["Photo1", "Photo2", "Photo3"],
    description: "The feeds cover photo",
    required: false,
    format: "string",
    isArray: true,
    uniqueItems: true,
  })
  readonly photos: [string | null];

  @ApiProperty({
    example: "Description",
    description: "The feeds description",
    required: true,
    format: "string",
    minimum: 10,
  })
  readonly description: string;

  @ApiProperty({
    description: "The feeds cover photo",
    required: true,
    format: "string",
    isArray: true,
    uniqueItems: true,
    examples: ["#tag1", "#tag2", "#tag3"],
  })
  readonly tags: [string];

  @ApiProperty({
    default: new Date(),
  })
  readonly updatedAt: Date;
}
