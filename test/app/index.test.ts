import { MDocsDep } from "../../src/app";

describe("MDocsDep", () => {
  let mdocs: MDocsDep;

  beforeAll(() => {
    mdocs = new MDocsDep();
  });

  it("should generate a dictionary with the provided parameters", async () => {
    const params = {
      typeResource: "testExampleDB",
    };
    const dictionary = await mdocs.generateDictionary(params);
    expect(dictionary).toEqual(params);
  });
});
