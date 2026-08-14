import { type RequestHandler } from 'express';
import sendMessage from '../tools/producer.ts';

export const startanalyze: RequestHandler = async (req, res) => {
  try {
    const { msg } = req.body ;
    await sendMessage();
    
    res.json("Successfully triggerd Kafka Broker");
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    } else {
      res.status(500).json({ message: 'An unknown error occurred' });
    }
  }
};