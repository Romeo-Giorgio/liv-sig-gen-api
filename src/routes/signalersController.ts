//********** Imports **********//
import express from "express";
import { Signaler, signalersModel } from "../models/signalersModel";

const router = express.Router();

//********** Routes **********//

// READ
router.get("/", async (request, response) => {
  try {
    const results = await signalersModel.getAll();
    response.json(results);
  } catch (e) {
    console.log(e);
    response.sendStatus(500);
  }
});

router.get("/:signalerID", async (request, response) => {
  try {
    const results = await signalersModel.getById(request.params.signalerID);
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
      id: request.body.id,
      firstName: request.body.firstName,
      lastName: request.body.lastName,
      phone: request.body.phone,
      mail: request.body.mail,
      drivingLicence: request.body.drivingLicence,
      latitude: request.body.latitude,
      longitude: request.body.longitude,
      referent: request.body.referent,
    };
    const results = await signalersModel.create(newSignaler);
    response.json(results);
  } catch (e) {
    console.log(e);
    response.sendStatus(500);
  }
});
// DELETE
router.delete("/:id", async (request, response) => {
  try {
    const results = await signalersModel.delete(request.params.id);
    response.json(results);
  } catch (e) {
    console.log(e);
    response.sendStatus(500);
  }
});

// UPDATE
router.put("/:id", async (request, response) => {
  try {
    const recordToUpdate: Signaler = {
      id: request.params.id,
      firstName: request.body.firstName,
      lastName: request.body.lastName,
      phone: request.body.phone,
      mail: request.body.mail,
      drivingLicence: request.body.drivingLicence,
      latitude: request.body.latitude,
      longitude: request.body.longitude,
      referent: request.body.referent,
    };
    const results = await signalersModel.update(recordToUpdate);
    response.json(results);
  } catch (e) {
    console.log(e);
    response.sendStatus(500);
  }
});
export default router;
