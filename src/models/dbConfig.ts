//********** Imports **********//
import postgres from "postgres";
import config from "../config";

//********** Config **********//
export const sql = postgres(config.POSTGRE_URL ?? "");
