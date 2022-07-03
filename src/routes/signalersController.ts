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
  console.log(request.body);
  try {
    const newSignaler: Signaler = {
      signalerId: request.body.signalerId,
      firstName: request.body.firstName,
      lastName: request.body.lastName,
      phone: request.body.phone,
      drivingLicence: request.body.drivingLicence,
      latitude: request.body.latitude,
      longitude: request.body.longitude,
    };
    const results = await signalersModel.create(newSignaler);
    response.json(results);
  } catch (e) {
    console.log(e);
    response.sendStatus(500);
  }
});
// DELETE
router.delete("/:signalerId", async (request, response) => {
  try {
    const results = await signalersModel.delete(request.params.signalerId);
    response.json(results);
  } catch (e) {
    console.log(e);
    response.sendStatus(500);
  }
});

export default router;
