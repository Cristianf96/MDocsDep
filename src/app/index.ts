import { IGenerateDictionaryParams } from "@app/utils/interfaces/mssql.interface";
import { EnumTypeResource } from "@app/utils/enums/enums";
import * as dotenv from "dotenv";
import { CMsSql } from "@app/modules/mssql";
// import { SecretClient } from "@azure/keyvault-secrets";
// import { DefaultAzureCredential } from "@azure/identity";
dotenv.config();

export class MDocsDep {
  async generateDictionary(
    params: IGenerateDictionaryParams
  ): Promise<Record<string, any>> {
    try {
      let result: any = {};
      const { typeResource } = params;
      // const KVUri = `https://${process.env.AZURE_KEY_VALUE_NAME}.vault.azure.net`;
      // const credential = new DefaultAzureCredential();
      // const client = new SecretClient(KVUri, credential);

      if (typeResource === EnumTypeResource.testExampleDB) {
        return {
          typeResource,
        };
      }

      // const secretName = process.env.AZURE_KEY_VALUE_SECRET_NAME;
      // if (!secretName) {
      //   throw new Error("AZURE_KEY_VALUE_SECRET_NAME is not defined");
      // }

      // const secret = await client.getSecret("kv-secret-mdocsdep");
      // console.log({ KVUri, secretName, secret });

      if (typeResource === EnumTypeResource.mssql) {
        result = await CMsSql.generateDictionaryWithMsSql(params);
        console.log({ result });
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
