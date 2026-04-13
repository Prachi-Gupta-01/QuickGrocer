import express from 'express';
import http from 'http';
import dotenv from 'dotenv';
import { Server } from 'lucide-react';
import axios from 'axios';
dotenv.config();
const app = express();
app.use(express.json());

const server = http.createServer(app);
const port = process.env.PORT || 5000;

const io = new Server(server, {
    cors:{
        origin: process.env.NEXT_BASE_URL,
    }
})

io.on('connection', (socket) => {
    console.log("user connected",socket.id)
    socket.on("identity",async (userId)=>{
        console.log(userId);
        await axios.post(`${process.env.NEXT_BASE_URL}/api/socket/connect`,{
            userId,socketId:socket.id
        })
    }),

    socket.on("update-location",async ({userId,latitude,longitude})=>{
    const location={
        type:"Point",
        coordinates:[longitude,latitude]
    }
    await axios.post(`${process.env.NEXT_BASE_URL}/api/socket/update-location`,{userId,location})
     io.emit("update-deliveryBoy-location",{userId,location})
   })

   app.post("/notify",(req,res)=>{
    const {event,data,socketId}=req.body
    if(socketId){
        io.to(socketId).emit(event,data)
    }else{
        io.emit(event,data)
    }

    return res.status(200).json({"success":true})
})

    socket.on("disconnect", () => {
        console.log("user disconnected",socket.id)
    })
})

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});