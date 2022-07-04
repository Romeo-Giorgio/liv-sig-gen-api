//********** Imports **********/
import { pool } from "./dbConfig";

//********** Types **********//
export interface Race {
  id: string;
  name: string;
  description?: string;
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
        `select * from race where id = '${raceId}'`,
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
        `insert into race (id, name, description) values ('${race.id}', '${race.name}', '${race.description}')`,
        (err, _) => {
          if (err) {
            return reject(err);
          }
          pool.query(
            `select * from race where id = '${race.id}'`,
            (err, results) => {
              if (err) {
                return reject(err);
              }
              return resolve(results[0]);
            }
          );
        }
      );
    });
  },

  delete: (raceId: string) => {
    return new Promise((resolve, reject) => {
      pool.query(`delete from race where id = '${raceId}'`, (err, results) => {
        if (err) {
          return reject(err);
        }
        return resolve({ deletedId: raceId });
      });
    });
  },
};
