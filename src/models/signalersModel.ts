//********** Imports **********/
import { pool } from "./dbConfig";

//********** Types **********//
export interface Signaler {
  signalerId: string;
  lastName: string;
  firstName: string;
  phone: string;
  drivingLicence: boolean;
  latitude: number;
  longitude: number;
}

export const signalersModel = {
  getAll: () => {
    return new Promise((resolve, reject) => {
      pool.query("select * from signaler", (err, results) => {
        if (err) {
          return reject(err);
        }
        return resolve(results);
      });
    });
  },
  create: (signaler: Signaler) => {
    return new Promise((resolve, reject) => {
      pool.query(
        `insert into signaler (signalerId, lastName, firstName, phone,  drivingLicence, latitude, longitude) 
                values ('${signaler.signalerId}', '${signaler.lastName}', '${signaler.firstName}', '${signaler.phone}', '${signaler.drivingLicence}', '${signaler.latitude}', '${signaler.longitude}')`,
        (err, results) => {
          if (err) {
            return reject(err);
          }
          return resolve(results);
        }
      );
    });
  },
  getById: (signalerId: string) => {
    return new Promise((resolve, reject) => {
      pool.query(
        `select * from signaler where signalerId = '${signalerId}'`,
        (err, results) => {
          if (err) {
            return reject(err);
          }
          return resolve(results[0]);
        }
      );
    });
  },
  delete: (signalerId: string) => {
    return new Promise((resolve, reject) => {
      pool.query(
        `delete from signaler where signalerId = '${signalerId}'`,
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
