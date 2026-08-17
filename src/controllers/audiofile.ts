import { type RequestHandler } from 'express';
import Audiofile, { type AudioInput }  from '../models/Audiofile.ts';


export const getAllAudioFiles: RequestHandler = async (req, res) => {
  try {
    const audiofiles = (await Audiofile.find());
    res.json(audiofiles);
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    } else {
      res.status(500).json({ message: 'An unknown error occurred' });
    }
  }
};

export const getProcessedAudioFiles: RequestHandler = async (req, res) => {
  try {
    const audiofiles = await Audiofile.find({"status":"processed"});
    res.json(audiofiles);
  } catch (error: unknown) {
    console.log(error);
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    } else {
      res.status(500).json({ message: 'An unknown error occurred' });
    }
  }
};

export const createAudio: RequestHandler = async (req, res) => {
  try {
    const { inputFile,stemType } = req.body as AudioInput;
    if (!inputFile || !stemType )
      return res.status(400).json({ error: 'InputFile and stemType are required' });
    const audiofile = await Audiofile.create({ inputFile, stemType, status: "waiting"});
    return  res.status(200).json(audiofile);
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    } else {
      res.status(500).json({ message: 'An unknown error occurred' });
    }
  }
};

export const getAudioFileById: RequestHandler = async (req, res) => {
  try {
    const {
      params: { id }
    } = req;
    const audiofile = await Audiofile.findById(id);
    if (!audiofile) return res.status(404).json({ error: 'File not found' });
    
    res.json(audiofile);
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    } else {
      res.status(500).json({ message: 'An unknown error occurred' });
    }
  }
};

export const deleteAudiofile: RequestHandler = async (req, res) => {
  try {
    const {
      params: { id }
    } = req;
    const audiofile = await Audiofile.findByIdAndDelete(id);
    if (!audiofile) return res.status(404).json({ error: 'Audiofile not found' });
    res.json({ message: 'File deleted' });
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    } else {
      res.status(500).json({ message: 'An unknown error occurred' });
    }
  }
};
