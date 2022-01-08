//********** Imports **********//
import {model, Schema} from "mongoose";
import { Track } from "./tracksModel";

//********** Types **********//
export interface TrackPoint{
    track:Track,
    latitude:number,
    longitude:number,
}

//********** Model **********//
const trackPointsSchema = new Schema<TrackPoint>({
    track: {type: Schema.Types.ObjectId, ref: 'Track'},
    latitude: { type: Number, required: true },
    longitude: { type: Number, required: true },
});

export const trackPointsModel = model<TrackPoint>("TrackPoint", trackPointsSchema);