import { Sequelize } from "sequelize";
let sequelizeInstance: Sequelize;
import * as dotenv from "dotenv";
dotenv.config();

const createInstanceDb = () => {
  const dbName = process.env.DB_DATABASE_NAME ?? "default_db_name";
  const dbUser = process.env.DB_USER ?? "default_db_user";
  const dbPassword = process.env.DB_PASSWORD ?? "default_db_password";
  const dbHost = process.env.DB_HOST ?? "default_db_host";

  sequelizeInstance = new Sequelize(dbName, dbUser, dbPassword, {
    host: dbHost,
    dialect: "mssql",
    dialectOptions: {
      options: {
        encrypt: true,
      },
    },
    define: {
      schema: "public",
      timestamps: false,
    },
    logging: false,
  });
  sequelizeInstance
    .authenticate()
    .then(() => {
      console.log("Connection has been established successfully.");
    })
    .catch((err) => {
      console.error("Unable to connect to the database:", err);
    });
};

export const getDbInstance = () => {
  if (!sequelizeInstance) {
    createInstanceDb();
  }
  return sequelizeInstance;
};
