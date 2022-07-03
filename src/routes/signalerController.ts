//********** Imports **********//
import express from "express";
import { Signaler, signalerModel } from "../models/signalerModel";

const router = express.Router();

//********** Routes **********//

// READ
router.get("/", async (request, response) => {
  try {
    const results = await signalerModel.getAll();
    response.json(results);
  } catch (e) {
    console.log(e);
    response.sendStatus(500);
  }
});

router.get("/:signalerID", async (request, response) => {
    try {
      const results = await signalerModel.getById(request.params.signalerID);
      response.json(results);
    } catch (e) {
      console.log(e);
      response.sendStatus(500);
    }
  });
// CREATE
router.post("/", async (request, response) => {
    try {
      const newSignaler: Signaler = {
        signalerId: request.body.signalerId,
        first_name: request.body.firstname,
        last_name: request.body.lastname,
        telephone: request.body.telephone,
        description: request.body.description,
        permis: request.body.permis,
        intersection: request.body.intersection,
      };
      const results = await signalerModel.create(newRace);
      response.json(results);
    } catch (e) {
      console.log(e);
      response.sendStatus(500);
    }
  });
// DELETE
router.delete("/:signalerId", async (request, response) => {
    try {
      const results = await signalerModel.delete(request.params.signalerId);
      response.json(results);
    } catch (e) {
      console.log(e);
      response.sendStatus(500);
    }
  });


export default router;
