//********** Imports **********//
import { model, Schema } from "mongoose";

//********** Types **********//
export interface Folder {
  name: string;
  description: string;
}

//********** Model **********//
const foldersSchema = new Schema<Folder>({
  name: { type: String, required: true },
  description: { type: String, required: true },
});

export const foldersModel = model<Folder>("Folder", foldersSchema);
