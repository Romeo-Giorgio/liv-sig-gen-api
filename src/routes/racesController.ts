//********** Imports **********//
import express from "express";
import { Race, racesModel } from "../models/racesModel";

const router = express.Router();

//********** Routes **********//

// READ
router.get("/", async (request, response) => {
  try {
    const results = await racesModel.getAll();
    response.json(results);
  } catch (e) {
    console.log(e);
    response.sendStatus(500);
  }
});

router.get("/:raceId", async (request, response) => {
  try {
    const results = await racesModel.getById(request.params.raceId);
    response.json(results);
  } catch (e) {
    console.log(e);
    response.sendStatus(500);
  }
});

// CREATE
router.post("/", async (request, response) => {
  try {
    const newRace: Race = {
      id: request.body.id,
      name: request.body.name,
      description: request.body.description,
    };
    const results = await racesModel.create(newRace);
    response.json(results);
  } catch (e) {
    console.log(e);
    response.sendStatus(500);
  }
});
// DELETE
router.delete("/:raceId", async (request, response) => {
  try {
    const results = await racesModel.delete(request.params.raceId);
    response.json(results);
  } catch (e) {
    console.log(e);
    response.sendStatus(500);
  }
});
// // UPDATE
// router.put("/:id", (request, response) => {
//   console.log("update race");
//   if (!ObjectId.isValid(request.params.id)) {
//     return response.status(400).send(`Unknown ID : ${request.params.id}`);
//   }

//   const recordToUpdate = {
//     name: request.body.name,
//     description: request.body.description,
//     folder: request.body.folder,
//     displayed: request.body.displayed,
//   };

//   racesModel.findByIdAndUpdate(
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
