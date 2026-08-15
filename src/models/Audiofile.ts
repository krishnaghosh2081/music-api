import mongoose,{ Types } from "mongoose";
import z from 'zod';



export const audioInputSchema = z.strictObject({
  inputFile: z.string(),
  stemType: z.string()
});


const audioSchema = new mongoose.Schema(
  {
    inputFile: {
      type: String,
      required: [true, 'InputFile is required'],
      trim: true
    },
    stemType: {
      type: String,
      required: [true, 'StemType is required'],
      trim: true 
    },
    status: {
      type: String,
      trim: true
    },
    outputFile:{
      type: String,
      trim: true
    },
  }
);

export type AudioInput = z.infer<typeof audioInputSchema>;
export default mongoose.model('Audiofile', audioSchema);