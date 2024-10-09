import {
  IGenerateDictionaryParams,
  ITableWithDescriptions,
} from "./utils/interfaces/mssql.interface";
import * as dotenv from "dotenv";
import { CMsSql } from "./modules/mssql";
import { EnumTypeResource } from "./utils/enums/enums";
dotenv.config();

export class MDocsDep {
  async generateDictionary(
    params: IGenerateDictionaryParams
  ): Promise<ITableWithDescriptions[] | string> {
    try {
      let result: any = {};
      const { typeResource } = params;

      if (typeResource === EnumTypeResource.testExampleDB) {
        return typeResource;
      }

      if (typeResource === EnumTypeResource.mssql) {
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
