//********** Imports **********/
import { pool } from "./dbConfig";


//********** Types **********//
export interface Signaler {
    signalerId: string;
    last_name: string;
    first_name: string;
    telephone: string;
    description?: string;
    permis: boolean;
    intersection: string;
  }

  export const signalerModel = {
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
            `insert into signaler (signalerId, last_name, first_name, telephone,description,Permis,intersection) 
                values ('${signaler.signalerId}', '${signaler.last_name}', '${signaler.first_name}', '${signaler.telephone}', '${signaler.description}', '${signaler.permis}', '${signaler.intersection}')`,
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
  }