import { type RequestHandler } from 'express';
import Recording from '../models/Recording.ts';
import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs';

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUDINARY_KEY,
    api_secret: process.env.CLOUDINARY_SECRET
});

//Get all Recordings
export const getRecordings: RequestHandler = async (req, res) => {
  try {
    const recordings = await Recording.find();
    res.json(recordings);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};


//fetch a single recording by id
export const getRecordingById: RequestHandler = async (req, res) => {
  try {
    const {
      params: { id }
    } = req;
    const recording = await Recording.findById(id);
    if (!recording) return res.status(404).json({ error: 'Recording not found' });
    
    res.json(recording);
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    } else {
      res.status(500).json({ message: 'An unknown error occurred' });
    }
  }
};

//delete a single recording by id
export const deleteRecording: RequestHandler = async (req, res) => {
  try {
    const {
      params: { id }
    } = req;
    const recording = await Recording.findByIdAndDelete(id);
    if (!recording) return res.status(404).json({ error: 'Recording not found' });
    res.json({ message: 'Recording deleted' });
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    } else {
      res.status(500).json({ message: 'An unknown error occurred' });
    }
  }
};

//store a single recording information
export const createRecordings: RequestHandler = async (req, res) => {
  try {

    //console.log("Req came");
    //console.log("Req file",req.file);
    const originalName= req.file?.originalname;
    const fileName= req.file?.filename;
    
    const path= req.file?.path;
    
    
    if (!originalName || !fileName || !path  )
      return res.status(400).json({ error: 'originalName,fileName,path  are required' });

    const uploadRes = await cloudinary.uploader.upload(
                  path,
                  {
                      resource_type: 'auto',
                      folder: 'CloudinaryDemo',
                      allowed_formats: ['mp3', 'wav'],
                      public_id: fileName,
                  },
                  function(error, result) {
                    if(error)
                      console.log(error);
                    if(result)
                       console.log("File uploaded . Url:",result.secure_url); 
                  }
            );


    const recording = await Recording.create({ originalName,fileName,filePath:uploadRes.secure_url });
    await fs.promises.rm(path, { force: true });
    return  res.status(200).json(recording);
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    } else {
      res.status(500).json({ message: 'An unknown error occurred' });
    }
  }
};
