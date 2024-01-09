import { DataSource } from "typeorm";

export const myDataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "",
  database: "typeorm_api",
  entities: ["src/entitys/*.ts"],
  synchronize: true,
});
