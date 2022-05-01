//********** Imports **********//
import express from "express";
import { racesModel } from "../models/racesModel";
import { ObjectId } from "../models/dbConfig";

const router = express.Router();

//********** Routes **********//

// READ
router.get("/", (request, response) => {
  console.log("getRaces");
  racesModel.find((err, docs) => {
    if (!err) {
      response.send(docs);
    } else {
      console.log(`Error to get data : ${err}`);
    }
  });
});

// CREATE
router.post("/", (request, response) => {
  console.log("create race");
  const newRecord = new racesModel({
    name: request.body.name,
    description: request.body.description,
    folder: request.body.folder,
    displayed: request.body.displayed,
  });

  newRecord.save((err, docs) => {
    if (!err) {
      response.send(docs);
    } else {
      console.log(`Error to save new data : ${err}`);
    }
  });
});

// UPDATE
router.put("/:id", (request, response) => {
  console.log("update race");
  if (!ObjectId.isValid(request.params.id)) {
    return response.status(400).send(`Unknown ID : ${request.params.id}`);
  }

  const recordToUpdate = {
    name: request.body.name,
    description: request.body.description,
    folder: request.body.folder,
    displayed: request.body.displayed,
  };

  racesModel.findByIdAndUpdate(
    request.params.id,
    { $set: recordToUpdate },
    { new: true },
    (err, docs) => {
      if (!err) {
        response.send(docs);
      } else {
        console.log(`Error to update  data : ${err}`);
      }
    }
  );
});

// DELETE
router.delete("/:id", (request, response) => {
  console.log("delete race");
  if (!ObjectId.isValid(request.params.id)) {
    return response.status(400).send(`Unknown ID : ${request.params.id}`);
  }

  racesModel.findByIdAndRemove(request.params.id, {}, (err, docs) => {
    if (!err) {
      response.send(docs);
    } else {
      console.log(`Error to delete data : ${err}`);
    }
  });
});
console.log("This shows errors");

export default router;
