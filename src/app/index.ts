interface GenerateDictionaryParams {
  db: string;
  data: any;
  keyValue: string;
  secretName: string;
}

export class MDocsDep {
  generateDictionary(params: GenerateDictionaryParams): Record<string, any> {
    const { db, data, keyValue, secretName } = params;
    return {
      db,
      data,
      keyValue,
      secretName,
    };
  }
}
