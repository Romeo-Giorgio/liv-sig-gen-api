//********** Imports **********//
import { model, Schema } from "mongoose";
import { Folder } from "./foldersModel";

//********** Types **********//
export interface Track{
    name: string,
    description?: string,
    folder?:Folder,
    displayed?: boolean
}

//********** Model **********//
const tracksSchema = new Schema<Track>({
    name: {type: String, required: true},
    description: {type: String, required: false},
    folder: {type: Schema.Types.ObjectId, ref: 'Folder'},
    displayed: {type: Boolean, required: false, default: true},
});

export const tracksModel = model<Track>("Track", tracksSchema);