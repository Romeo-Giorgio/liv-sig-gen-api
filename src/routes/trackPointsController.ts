//********** Imports **********//
import express from "express";
import { trackPointsModel } from "../models/trackPointsModel";
import { ObjectId } from "../models/dbConfig";

const router = express.Router();

//********** Routes **********//

// READ
router.get('/', (request, response) => {
    trackPointsModel.find((err, docs)=>{
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
      const newRecord  = new trackPointsModel({
        track: request.body.track,
        latitude: request.body.latitude,
        longitude: request.body.longitude
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
        track: request.body.track,
        latitude: request.body.latitude,
        longitude: request.body.longitude
      };
  
      trackPointsModel.findByIdAndUpdate(request.params.id, {$set: recordToUpdate}, {new: true}, (err, docs)=>{
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
  
      trackPointsModel.findByIdAndRemove(request.params.id, {}, (err, docs)=>{
          if(!err){
              response.send(docs);
          }
          else{
              console.log(`Error to delete data : ${err}`)
          }
      })
  });
  
  export default router;