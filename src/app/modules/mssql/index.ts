import {
  IColumn,
  IColumnWithDescription,
  IGetColumnsMSSQL,
  IGetTablesMSSQL,
  ITableWithDescriptions,
} from "../../utils/interfaces/mssql.interface";
import { QueryTypes } from "sequelize";
import {
  CQueryGetColumnsMSSQL,
  CQueryGetTablesMSSQL,
} from "../../utils/constants/constants";
import { getDbInstance } from "./database/index";

export class CMsSql {
  static async generateDictionaryWithMsSql(): Promise<Record<string, any>> {
    let result: ITableWithDescriptions[] = [];
    const sequelizeInstance = getDbInstance();
    const getTables: IGetTablesMSSQL[] = await sequelizeInstance.query(
      CQueryGetTablesMSSQL,
      {
        type: QueryTypes.SELECT,
      }
    );

    const getColumns: IGetColumnsMSSQL[] = await sequelizeInstance.query(
      CQueryGetColumnsMSSQL,
      {
        type: QueryTypes.SELECT,
      }
    );

    for (const element of getTables) {
      const nameTable = element.table_name;
      const descriptionTable = element.table_description;
      const [descriptionEs, descriptionEn] = descriptionTable.split("\r\n");
      const columns: IColumn[] = getColumns
        .filter((column) => column.table_name === nameTable)
        .map((column) => ({
          ...column,
          column_length: Number(column.column_length),
        }));
      const columnsWithDescriptions: IColumnWithDescription[] = columns.map(
        (column) => {
          const [descriptionEs, descriptionEn] =
            column.column_description.split("\r\n");
          return {
            column_name: column.column_name,
            column_data_type: column.column_data_type,
            column_length: column.column_length,
            descriptionsColumn: {
              es: descriptionEs,
              en: descriptionEn,
            },
          };
        }
      );
      result.push({
        nameTable,
        descriptionsTable: {
          es: descriptionEs,
          en: descriptionEn,
        },
        columns: columnsWithDescriptions,
      });
    }

    result.sort((a: { nameTable: string }, b: { nameTable: any }) =>
      a.nameTable.localeCompare(b.nameTable)
    );

    if (result.length === 0) {
      return {
        error:
          "No tables were found in the database and/or they do not have a description",
      };
    }

    return result;
  }
}
