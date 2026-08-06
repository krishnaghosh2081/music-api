import 'dotenv/config';
import express from "express";
import cors from "cors";
import connectDB from "./dbinit";
import songRoutes from "./routes/song";

const app = express();

connectDB();

const port = process.env.PORT || 5000;

// middleware
app.use(express.json());
app.use(cors());

// Routes
app.use("/api/songs", songRoutes);

app.get("/", (req, res) => {
  res.send("Hello Welcome Music lovers...");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});