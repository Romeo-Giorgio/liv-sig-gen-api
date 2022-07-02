//********** Imports **********/
import { pool } from "./dbConfig";

//********** Types **********//
export interface Race {
  raceId: string;
  name: string;
  description?: string;
  displayed?: boolean;
}

//********** Model **********//
export const racesModel = {
  getAll: () => {
    return new Promise((resolve, reject) => {
      pool.query("select * from race", (err, results) => {
        if (err) {
          return reject(err);
        }
        return resolve(results);
      });
    });
  },

  getById: (raceId: string) => {
    return new Promise((resolve, reject) => {
      pool.query(
        `select * from race where raceId = '${raceId}'`,
        (err, results) => {
          if (err) {
            return reject(err);
          }
          return resolve(results[0]);
        }
      );
    });
  },

  create: (race: Race) => {
    return new Promise((resolve, reject) => {
      pool.query(
        `insert into race (raceId, name, description, displayed) values ('${race.raceId}', '${race.name}', '${race.description}',${race.displayed})`,
        (err, results) => {
          if (err) {
            return reject(err);
          }
          return resolve(results);
        }
      );
    });
  },

  delete: (raceId: string) => {
    return new Promise((resolve, reject) => {
      pool.query(
        `delete from race where raceId = '${raceId}'`,
        (err, results) => {
          if (err) {
            return reject(err);
          }
          return resolve(results);
        }
      );
    });
  },
};
