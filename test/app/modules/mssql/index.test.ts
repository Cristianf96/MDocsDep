// tests/index.test.ts
import { Sequelize } from "sequelize";
import { MDocsDep } from "../../../../src";
import { getDbInstance } from "../../../../src/app/modules/mssql/database";

describe("MDocsDep Mssql", () => {
  let sequelizeInstance: Sequelize;
  let mdocs: MDocsDep;

  beforeAll(() => {
    sequelizeInstance = getDbInstance();
    mdocs = new MDocsDep();
  });

  afterAll(async () => {
    if (sequelizeInstance) {
      await sequelizeInstance.close();
    }
  });

  it("should generate a dictionary with the provided parameters for mssql", async () => {
    const params = {
      typeResource: "mssql",
    };
    const dictionary = await mdocs.generateDictionary(params);
    expect(dictionary).toBeInstanceOf(Array);
    expect(dictionary.length).toBeGreaterThan(0);
  });
});
