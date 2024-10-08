interface GenerateDictionaryParams {
  typeResource: string;
  data: any;
  keyValue: string;
  secretName: string;
}

export class MDocsDep {
  generateDictionary(params: GenerateDictionaryParams): Record<string, any> {
    const { typeResource, data, keyValue, secretName } = params;

    return {
      typeResource,
      data,
      keyValue,
      secretName,
    };
  }
}
