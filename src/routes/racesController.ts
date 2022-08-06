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
      color: request.body.color,
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
// UPDATE
router.put("/:id", async (request, response) => {
  try {
    const recordToUpdate: Race = {
      id: request.params.id,
      color: request.body.color,
      name: request.body.name,
      description: request.body.description,
    };
    const results = await racesModel.update(recordToUpdate);
    response.json(results);
  } catch (e) {
    console.log(e);
    response.sendStatus(500);
  }
});
export default router;
