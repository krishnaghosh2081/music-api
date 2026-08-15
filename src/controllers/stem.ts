import { type RequestHandler } from 'express';
import sendMessage from '../tools/producer.ts';
import Audiofile, { type AudioInput }  from '../models/Audiofile.ts';

export const startanalyze: RequestHandler = async (req, res) => {
  try {
    const { inputFile,stemType } = req.body as AudioInput;
     if (!inputFile || !stemType )
          return res.status(400).json({ error: 'InputFile and stemType are required' });
    const audiofile = await Audiofile.create({ inputFile, stemType, status: "waiting"});
   
    const msg=audiofile._id.toString();
    await sendMessage(msg);
    
    res.json("Successfully triggerd Kafka Broker with id: "+audiofile._id);
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    } else {
      res.status(500).json({ message: 'An unknown error occurred' });
    }
  }
};