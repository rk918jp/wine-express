import "reflect-metadata";
import { DataSource } from "typeorm";
import { User } from "./entities/User";

export const AppDataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "080709",
  database: "test",
  synchronize: true,
  logging: false,
  entities: [User],
  migrations: [
      "db/migrations/*.ts",
  ],
  subscribers: [],
});

