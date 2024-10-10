import { MDocsDep } from "../../../src/app";

describe("MDocsDep not found", () => {
  let mdocs: MDocsDep;

  beforeAll(() => {
    mdocs = new MDocsDep();
  });

  it("should return 'notFound' when the typeResource is not found", async () => {
    const params = {
      typeResource: "notFound",
    };
    const dictionary = await mdocs.generateDictionary(params);
    expect(dictionary).toEqual("The typeResource is not valid");
  });
});
