import * as dotenv from "dotenv";

const path = `${__dirname}/../.env.production`;
dotenv.config({ path: path });

export default {
  POSTGRE_URL: process.env.POSTGRE_URL,
};
