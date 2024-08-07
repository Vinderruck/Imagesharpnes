import express from 'express'
import sharp from 'sharp';
import multer from 'multer';
import cors from 'cors';

const storage =multer.memoryStorage();
const upload =multer({storage:storage})

const app = express()
app.use(express.json())
app.use(cors())

const Port =5080
app.post('/Upload',upload.single("imageInput"),(req,res)=>{
    const image =sharp(req.files.buffer);
    image
    toBuffer()
    .then(function (data) {
      console.log(data);
      let base64Encoded = data.toString("base64");
      const url = `data:image/jpeg;base64,${base64Encoded}`;

      res.status(200).send({ data: url });
    })
})
app.listen(Port, ()=>{console.log(`server running from http://localhost:${Port}`)})