//********** Imports **********//
import { pool } from "./dbConfig";

//********** Types **********//
export interface RacePoint {
  id: number;
  raceId: string;
  latitude: number;
  longitude: number;
}

//********** Model **********/
export const racePointsModel = {
  getAll: () => {
    return new Promise((resolve, reject) => {
      pool.query("select * from racePoint", (err, results) => {
        if (err) {
          return reject(err);
        }
        return resolve(results);
      });
    });
  },

  getAllByRaceId: (raceId: string) => {
    return new Promise((resolve, reject) => {
      pool.query(
        `select * from racePoint where raceId = '${raceId}'`,
        (err, results) => {
          if (err) {
            return reject(err);
          }
          return resolve(results);
        }
      );
    });
  },

  create: (racePoint: RacePoint) => {
    return new Promise((resolve, reject) => {
      pool.query(
        `insert into racePoint (id, raceId, latitude, longitude) values (${racePoint.id}, '${racePoint.raceId}', '${racePoint.latitude}', '${racePoint.longitude}')`,
        (err, results) => {
          if (err) {
            return reject(err);
          }
          pool.query(
            `select * from racePoint where id = '${racePoint.id}'`,
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
  deleteById: (id: string) => {
    return new Promise((resolve, reject) => {
      pool.query(`delete from racePoint where id = '${id}'`, (err, results) => {
        if (err) {
          return reject(err);
        }
        return resolve({ deletedId: id });
      });
    });
  },
  updateCoordinatesById: (updatedRacePoint: RacePoint) => {
    return new Promise((resolve, reject) => {
      pool.query(
        `update racePoint set latitude='${updatedRacePoint.latitude}', longitude='${updatedRacePoint.longitude}' where id='${updatedRacePoint.id}'`,
        (err, results) => {
          if (err) {
            return reject(err);
          }
          return resolve({ updatedRacePoint: updatedRacePoint });
        }
      );
    });
  },
};
