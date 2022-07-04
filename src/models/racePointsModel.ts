//********** Imports **********//
import { pool } from "./dbConfig";

//********** Types **********//
export interface RacePoint {
  id: string;
  raceId: string;
  latitude: number;
  longitude: number;
  nb: number;
}

//********** Model **********/
export const racePointsModel = {
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
        `insert into racePoint (id, raceId, latitude, longitude, nb) values ('${racePoint.id}', '${racePoint.raceId}', '${racePoint.latitude}', '${racePoint.longitude}', ${racePoint.nb})`,
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
  deleteByRaceId: (raceId: string) => {
    return new Promise((resolve, reject) => {
      pool.query(
        `delete from racePoint where raceId = '${raceId}'`,
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
