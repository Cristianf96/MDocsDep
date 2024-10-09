import { IGenerateDictionaryParams } from "./utils/interfaces/mssql.interface";
import * as dotenv from "dotenv";
import { CMsSql } from "./modules/mssql";
dotenv.config();

export class MDocsDep {
  async generateDictionary(
    params: IGenerateDictionaryParams
  ): Promise<Record<string, any>> {
    try {
      let result: any = {};
      const { typeResource } = params;

      if (typeResource === "testExampleDB") {
        return {
          typeResource,
        };
      }

      if (typeResource === "mssql") {
        result = await CMsSql.generateDictionaryWithMsSql();
      }

      return result;
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(error.message);
      } else {
        throw new Error(String(error));
      }
    }
  }
}
