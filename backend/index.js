import express from 'express'
import sharp from 'sharp';
import multer from 'multer';
import cors from 'cors';

const app = express()
app.use(express.json())
app.use(cors())

const Port =5080


app.listen(Port, ()=>{console.log(`server running from http://localhost:${Port}`)})