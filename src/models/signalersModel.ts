//********** Imports **********/
import { pool } from "./dbConfig";

//********** Types **********//
export interface Signaler {
  id: string;
  lastName: string;
  firstName: string;
  phone: string;
  mail: string;
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
        `insert into signaler (id, lastName, firstName, phone, mail, drivingLicence, latitude, longitude) 
                values ('${signaler.id}', '${signaler.lastName}', '${signaler.firstName}', '${signaler.phone}', '${signaler.mail}', '${signaler.drivingLicence}', '${signaler.latitude}', '${signaler.longitude}')`,
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
        `select * from signaler where id = '${signalerId}'`,
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
        `delete from signaler where id = '${signalerId}'`,
        (err, results) => {
          if (err) {
            return reject(err);
          }
          return resolve(results);
        }
      );
    });
  },
  update: (updatedSignaler: Signaler) => {
    return new Promise((resolve, reject) => {
      pool.query(
        `update signaler set firstName='${updatedSignaler.firstName}', lastName='${updatedSignaler.lastName}', phone='${updatedSignaler.phone}', mail='${updatedSignaler.mail}', latitude='${updatedSignaler.latitude}', longitude='${updatedSignaler.longitude}', drivingLicence=${updatedSignaler.drivingLicence} where id='${updatedSignaler.id}'`,
        (err, results) => {
          if (err) {
            return reject(err);
          }
          return resolve({ updatedSignaler: updatedSignaler });
        }
      );
    });
  },
};
