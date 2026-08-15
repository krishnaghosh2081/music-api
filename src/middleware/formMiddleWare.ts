import { type RequestHandler } from 'express';
import formidable from 'formidable';
import fs from 'fs';
import path from 'path';


const formMiddleWare = (): RequestHandler =>
  (req, res, next) => {
    //console.log("request came==");
    const uploadDir = path.join(process.cwd(), 'upload');


    // make sure upload folder exists
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir);
    }


    const form = formidable({
      uploadDir,

      maxFileSize: 100 * 1024 * 1024,

      keepExtensions: true,

      filename: (name, ext, part) => {

        const originalName =
          part.originalFilename ?? `file${ext}`;

        return `${Date.now()}-${originalName}`;
      },


      filter: ({ mimetype }) => {

        const valid =
          mimetype?.startsWith('audio/') ?? false;


        return valid;
      },
    });



    form.parse(req, (err, fields, files) => {


      if (err) {
        return next(err);
      }


      try {

        const bodyField = fields.body?.[0];
        //console.log("bodyfield:",bodyField);

        if (!bodyField || typeof bodyField !== 'string') {
          return next(
            new Error('Invalid body field', { cause: { status: 400 } })
          );
        }


        req.body = JSON.parse(bodyField);


        const audio = files.file;
        //console.log("audio:",audio);


        req.body.file =
          Array.isArray(audio)
            ? audio[0]
            : audio;

        //console.log("req.body.file:",req.body.file);
        next();


      } catch(error) {

        next(error);

      }

    });

};


export default formMiddleWare;