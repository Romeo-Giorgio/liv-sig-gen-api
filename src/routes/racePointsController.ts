//********** Imports **********//
import express from "express";
import { RacePoint, racePointsModel } from "../models/racePointsModel";

const router = express.Router();

//********** Routes **********//

// READ
router.get("/:raceId", async (request, response) => {
  try {
    const results = await racePointsModel.getAllByRaceId(request.params.raceId);
    response.json(results);
  } catch (e) {
    console.log(e);
    response.sendStatus(500);
  }
});

// CREATE
router.post("/", async (request, response) => {
  try {
    const newRacePoint: RacePoint = {
      id: request.body.id,
      raceId: request.body.raceId,
      latitude: request.body.latitude,
      longitude: request.body.longitude,
      nb: request.body.nb,
    };
    const results = await racePointsModel.create(newRacePoint);
    response.json(results);
  } catch (e) {
    console.log(e);
    response.sendStatus(500);
  }
});
// DELETE
router.delete("/:raceId", async (request, response) => {
  try {
    const results = await racePointsModel.deleteByRaceId(request.params.raceId);
    response.json(results);
  } catch (e) {
    console.log(e);
    response.sendStatus(500);
  }
});

// // UPDATE
// router.put("/:id", (request, response) => {
//   if (!ObjectId.isValid(request.params.id)) {
//     return response.status(400).send(`Unknown ID : ${request.params.id}`);
//   }

//   const recordToUpdate = {
//     race: request.body.race,
//     latitude: request.body.latitude,
//     longitude: request.body.longitude,
//   };

//   racePointsModel.findByIdAndUpdate(
//     request.params.id,
//     { $set: recordToUpdate },
//     { new: true },
//     (err, docs) => {
//       if (!err) {
//         response.send(docs);
//       } else {
//         console.log(`Error to update  data : ${err}`);
//       }
//     }
//   );
// });

export default router;
