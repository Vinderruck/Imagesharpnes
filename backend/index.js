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
    const image =sharp(req.file.buffer);
    image
    .jpeg({ mozjpeg: true }) 
    .toBuffer()
    .then(function (data) {
      console.log(data);
      //let base64Encoded = data.toString("base64");
      //const url = `data:image/jpeg;base64,${base64Encoded}`;
      let pixel =[]
 
      for(let i = 0; i < data.length; i += 4){
pixel.push(data[i])
      }

      const maxSum = KadanesAlgorithm(pixel)

      res.status(200).send({ data: maxSum });
    })
    //KadanesAlgorithm
    function KadanesAlgorithm () {
     let maxcurrent =[0]
     let MaxGlobal =[0]

     for(let i = 1; i < Array.length; i++){
      const maxcurrent = Math.max(arr[i], maxcurrent + arr[i])

        if(maxcurrent > MaxGlobal){
          MaxGlobal =maxcurrent
        }
     return MaxGlobal
     }
    }
})
app.listen(Port, ()=>{console.log(`server running from http://localhost:${Port}`)})