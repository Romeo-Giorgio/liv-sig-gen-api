//********** Imports **********//
import { model, Schema } from "mongoose";

//********** Types **********//
export interface Signaler {
  lastName: string;
  firstName: string;
  phoneNumber: string;
  email: string;
}

//********** Model **********//
const signalersSchema = new Schema<Signaler>({
  lastName: { type: String, required: true },
  firstName: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  email: { type: String, required: true },
});

export const signalersModel = model<Signaler>("Signaler", signalersSchema);
