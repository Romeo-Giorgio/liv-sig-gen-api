//********** Imports **********//
import express from "express";
import { foldersModel } from "../models/foldersModel";
import { ObjectId } from "../models/dbConfig";

const router = express.Router();

//********** Routes **********//

// READ
router.get('/', (request, response) => {
    foldersModel.find((err, docs)=>{
      if(!err){
          response.send(docs);
      }
      else{
          console.log(`Error to get data : ${err}`)
      }
  })
});

// CREATE
router.post('/', (request, response)=>{
    const newRecord  = new foldersModel({
        name: request.body.name,
        description: request.body.description
    });

    newRecord.save((err, docs)=>{
        if(!err){
            response.send(docs);
        }
        else{
            console.log(`Error to save new data : ${err}`)
        }
    });
});

// UPDATE
router.put('/:id', (request, response)=>{
    if(!ObjectId.isValid(request.params.id)){
        return response.status(400).send(`Unknown ID : ${request.params.id}`);
    }

    const recordToUpdate = {
        name: request.body.name,
        description: request.body.description
    };

    foldersModel.findByIdAndUpdate(request.params.id, {$set: recordToUpdate}, {new: true}, (err, docs)=>{
        if(!err){
            response.send(docs);
        }
        else{
            console.log(`Error to update  data : ${err}`)
        }
    });
});

// DELETE
router.delete('/:id', (request, response)=>{
    if(!ObjectId.isValid(request.params.id)){
        return response.status(400).send(`Unknown ID : ${request.params.id}`);
    }

    foldersModel.findByIdAndRemove(request.params.id, {}, (err, docs)=>{
        if(!err){
            response.send(docs);
        }
        else{
            console.log(`Error to delete data : ${err}`)
        }
    })
});

export default router;