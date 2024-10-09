export interface IGenerateDictionaryParams {
  typeResource: string;
}

export interface IGetTablesMSSQL {
  table_name: string;
  table_description: string;
}

export interface IGetColumnsMSSQL {
  table_name: string;
  column_name: string;
  column_data_type: string;
  column_length: string;
  column_description: string;
}

export interface IColumn {
  column_name: string;
  column_data_type: string;
  column_length: number;
  column_description: string;
}

export interface ITableDescription {
  es: string;
  en: string;
}

export interface IColumnWithDescription {
  column_name: string;
  column_data_type: string;
  column_length: number;
  column_descriptions: ITableDescription;
}

export interface ITableWithDescriptions {
  table_name: string;
  table_descriptions: ITableDescription;
  table_columns: IColumnWithDescription[];
}
