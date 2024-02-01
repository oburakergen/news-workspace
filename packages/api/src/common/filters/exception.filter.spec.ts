import { ExceptionFilter } from "@app/common/filters/exception.filter";

describe("ExceptionFilter", () => {
  it("should be defined", () => {
    expect(new ExceptionFilter()).toBeDefined();
  });
});
