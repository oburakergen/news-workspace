import { ArgumentMetadata, Injectable, PipeTransform, Type } from "@nestjs/common";
import { plainToClass } from "class-transformer";
import { validate } from "class-validator";
import { VALIDATION_ERROR } from "@app/common/constants/error.constants";
import { ValidationError } from "@app/common/exceptions/validation.error";

@Injectable()
export class ValidationPipe implements PipeTransform<any> {
  async transform(value: any, { metatype }: ArgumentMetadata) {
    if (!metatype || !this.toValidate(metatype)) {
      return value;
    }

    const object = plainToClass(metatype, value);
    const errors = await validate(object);

    if (errors.length > 0) {
      console.log(errors);
      const errorMessage = errors.map((error) => Object.values(error).join(";")).join(";");

      throw new ValidationError({
        ...VALIDATION_ERROR,
        error: errorMessage,
      });
    }
    return value;
  }

  private toValidate(metatype: Type<any>): boolean {
    const types = [String, Boolean, Number, Array, Object];
    return !types.find((type) => metatype === type);
  }
}
