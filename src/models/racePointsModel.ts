//********** Imports **********//
import { pool } from "./dbConfig";

//********** Types **********//
export interface RacePoint {
  racePointId: string;
  raceId: string;
  latitude: number;
  longitude: number;
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
        `insert into racePoint (racePointId, raceId, latitude, longitude) values ('${racePoint.racePointId}', '${racePoint.raceId}', '${racePoint.latitude}', '${racePoint.longitude}')`,
        (err, results) => {
          if (err) {
            return reject(err);
          }
          return resolve(results);
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
