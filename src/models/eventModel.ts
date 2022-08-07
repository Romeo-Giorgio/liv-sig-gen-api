//********** Imports **********/
import { pool } from "./dbConfig";

//********** Types **********//
export interface Evenement {
  id: number;
  eventLabel: string;
  dateLabel: string;
  bikeLabel: string;
  issueLabel: string;
}

//********** Model **********//
export const eventModel = {
  get: () => {
    return new Promise((resolve, reject) => {
      pool.query(`select * from evenement where id = 1`, (err, results) => {
        if (err) {
          return reject(err);
        }
        return resolve(results[0]);
      });
    });
  },

  update: (updatedEvenement: Evenement) => {
    return new Promise((resolve, reject) => {
      pool.query(
        `update evenement set eventLabel='${updatedEvenement.eventLabel.replace(
          "'",
          "''"
        )}', dateLabel='${updatedEvenement.dateLabel.replace(
          "'",
          "''"
        )}', bikeLabel='${updatedEvenement.bikeLabel.replace(
          "'",
          "''"
        )}', issueLabel='${updatedEvenement.issueLabel.replace(
          "'",
          "''"
        )}' where id=${updatedEvenement.id}`,
        (err, _) => {
          if (err) {
            return reject(err);
          }
          return resolve({ updatedEvenement: updatedEvenement });
        }
      );
    });
  },
};
