// //********** Imports **********//
// import express from "express";
// import { RacePoint, racePointsModel } from "../models/racePointsModel";

// const router = express.Router();

// //********** Routes **********//

// // READ
// router.get("/", async (request, response) => {
//   try {
//     const results = await racePointsModel.getAll();
//     response.json(results);
//   } catch (e) {
//     console.log(e);
//     response.sendStatus(500);
//   }
// });
// router.get("/:raceId", async (request, response) => {
//   try {
//     const results = await racePointsModel.getAllByRaceId(request.params.raceId);
//     response.json(results);
//   } catch (e) {
//     console.log(e);
//     response.sendStatus(500);
//   }
// });

// // CREATE
// router.post("/", async (request, response) => {
//   try {
//     const newRacePoint: RacePoint = {
//       id: request.body.id,
//       raceId: request.body.raceId,
//       latitude: request.body.latitude,
//       longitude: request.body.longitude,
//     };
//     const results = await racePointsModel.create(newRacePoint);
//     response.json(results);
//   } catch (e) {
//     console.log(e);
//     response.sendStatus(500);
//   }
// });
// // DELETE
// router.delete("/:id", async (request, response) => {
//   try {
//     const results = await racePointsModel.deleteById(request.params.id);
//     response.json(results);
//   } catch (e) {
//     console.log(e);
//     response.sendStatus(500);
//   }
// });

// // UPDATE
// router.put("/:id", async (request, response) => {
//   try {
//     const recordToUpdate: RacePoint = {
//       id: Number(request.params.id),
//       raceId: request.body.raceId,
//       latitude: request.body.latitude,
//       longitude: request.body.longitude,
//     };
//     const results = await racePointsModel.updateCoordinatesById(recordToUpdate);
//     response.json(results);
//   } catch (e) {
//     console.log(e);
//     response.sendStatus(500);
//   }
// });

// export default router;
