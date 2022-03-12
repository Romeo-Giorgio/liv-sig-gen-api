//********** Imports **********//
import {model, Schema} from "mongoose";
import { Race } from "./racesModel";

//********** Types **********//
export interface RacePoint{
    race:Race,
    latitude:number,
    longitude:number,
}

//********** Model **********//
const racePointsSchema = new Schema<RacePoint>({
    race: {type: Schema.Types.ObjectId, ref: 'Race'},
    latitude: { type: Number, required: true },
    longitude: { type: Number, required: true },
});

export const racePointsModel = model<RacePoint>("RacePoint", racePointsSchema);