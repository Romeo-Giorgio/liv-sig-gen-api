//********** Imports **********//
import { model, Schema } from "mongoose";
import { Folder } from "./foldersModel";

//********** Types **********//
export interface Race{
    name: string,
    description?: string,
    folder?:Folder,
    displayed?: boolean
}

//********** Model **********//
const racesSchema = new Schema<Race>({
    name: {type: String, required: true},
    description: {type: String, required: false},
    folder: {type: Schema.Types.ObjectId, ref: 'Folder'},
    displayed: {type: Boolean, required: false, default: true},
});

export const racesModel = model<Race>("Race", racesSchema);