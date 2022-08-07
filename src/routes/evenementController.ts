//********** Imports **********//
import express from "express";
import { Evenement, eventModel } from "../models/eventModel";

const router = express.Router();

//********** Routes **********//

// READ

router.get("/", async (request, response) => {
  try {
    const results = await eventModel.get();
    response.json(results);
  } catch (e) {
    console.log(e);
    response.sendStatus(500);
  }
});

// UPDATE
router.put("/:evenementId", async (request, response) => {
  try {
    const recordToUpdate: Evenement = {
      id: Number(request.params.evenementId),
      bikeLabel: request.body.bikeLabel,
      dateLabel: request.body.dateLabel,
      eventLabel: request.body.eventLabel,
      issueLabel: request.body.issueLabel,
    };
    const results = await eventModel.update(recordToUpdate);
    response.json(results);
  } catch (e) {
    console.log(e);
    response.sendStatus(500);
  }
});
export default router;
