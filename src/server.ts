import express from "express";
import cors from "cors";
import connectDB from "./dbinit.ts";



const app =express();

connectDB();

const port = process.env.PORT ;

// middleware
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello Welcome Music lovers...");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});