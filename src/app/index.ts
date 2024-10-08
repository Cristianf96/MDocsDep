import { GenerateDictionaryParams } from "@app/app/utils/interfaces/mssql.interface";
import * as dotenv from "dotenv";
dotenv.config();

export class MDocsDep {
  generateDictionary(params: GenerateDictionaryParams): Record<string, any> {
    const { typeResource, data } = params;

    return {
      typeResource,
      data,
    };
  }
}
