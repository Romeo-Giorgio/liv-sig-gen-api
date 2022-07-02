//********** Imports **********//
import MySQL from "mysql";

//********** Config **********//
export const pool = MySQL.createPool({
  connectionLimit: 10,
  password: "root",
  user: "root",
  database: "livsiggenapi",
  host: "localhost",
  port: 3306,
});
