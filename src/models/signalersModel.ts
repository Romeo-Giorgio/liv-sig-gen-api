// //********** Imports **********/
// import { pool } from "./dbConfig";

// //********** Types **********//
// export interface Signaler {
//   id: string;
//   lastName: string;
//   firstName: string;
//   phone: string;
//   mail: string;
//   drivingLicence: boolean;
//   latitude: number;
//   longitude: number;
//   referent: string;
//   previousSignaler: string;
//   nextSignaler: string;
//   localisation: string;
// }

// export const signalersModel = {
//   getAll: () => {
//     return new Promise((resolve, reject) => {
//       pool.query("select * from signaler", (err, results) => {
//         if (err) {
//           return reject(err);
//         }
//         return resolve(results);
//       });
//     });
//   },
//   create: (signaler: Signaler) => {
//     return new Promise((resolve, reject) => {
//       pool.query(
//         `insert into signaler (id, lastName, firstName, phone, mail, drivingLicence, localisation${
//           signaler.referent != null ? ", referent" : ""
//         }${signaler.previousSignaler != null ? ", previousSignaler" : ""}${
//           signaler.nextSignaler != null ? ", nextSignaler" : ""
//         }) values ('${signaler.id}', '${signaler.lastName}', '${
//           signaler.firstName
//         }', '${signaler.phone}', '${signaler.mail}', ${
//           signaler.drivingLicence
//         },'${signaler.localisation}'${
//           signaler.referent != null ? `, '${signaler.referent}'` : ""
//         }${
//           signaler.previousSignaler != null
//             ? `, '${signaler.previousSignaler}'`
//             : ""
//         }${
//           signaler.nextSignaler != null ? `, '${signaler.nextSignaler}'` : ""
//         })`,
//         (err, results) => {
//           if (err) {
//             return reject(err);
//           }
//           pool.query(
//             `select * from signaler where id = '${signaler.id}'`,
//             (err, results) => {
//               if (err) {
//                 return reject(err);
//               }
//               return resolve(results[0]);
//             }
//           );
//         }
//       );
//     });
//   },
//   getById: (signalerId: string) => {
//     return new Promise((resolve, reject) => {
//       pool.query(
//         `select * from signaler where id = '${signalerId}'`,
//         (err, results) => {
//           if (err) {
//             return reject(err);
//           }
//           return resolve(results[0]);
//         }
//       );
//     });
//   },
//   delete: (signalerId: string) => {
//     return new Promise((resolve, reject) => {
//       pool.query(
//         `delete from signaler where id = '${signalerId}';`,
//         (err, _) => {
//           if (err) {
//             return reject(err);
//           }
//           return resolve({ deletedId: signalerId });
//         }
//       );
//     });
//   },
//   update: (updatedSignaler: Signaler) => {
//     return new Promise((resolve, reject) => {
//       pool.query(
//         `update signaler set firstName='${
//           updatedSignaler.firstName
//         }', lastName='${updatedSignaler.lastName}', phone='${
//           updatedSignaler.phone
//         }', mail='${updatedSignaler.mail}', latitude='${
//           updatedSignaler.latitude
//         }', longitude='${updatedSignaler.longitude}', localisation='${
//           updatedSignaler.localisation
//         }',drivingLicence=${updatedSignaler.drivingLicence}${
//           updatedSignaler.referent != null && updatedSignaler.referent !== ""
//             ? `, referent='${updatedSignaler.referent}'`
//             : ""
//         }${
//           updatedSignaler.previousSignaler != null &&
//           updatedSignaler.previousSignaler !== ""
//             ? `, previousSignaler='${updatedSignaler.previousSignaler}'`
//             : ""
//         }${
//           updatedSignaler.nextSignaler != null &&
//           updatedSignaler.nextSignaler !== ""
//             ? `, nextSignaler='${updatedSignaler.nextSignaler}'`
//             : ""
//         } where id='${updatedSignaler.id}'`,
//         (err, _) => {
//           if (err) {
//             return reject(err);
//           }
//           return resolve({ updatedSignaler: updatedSignaler });
//         }
//       );
//     });
//   },
// };
