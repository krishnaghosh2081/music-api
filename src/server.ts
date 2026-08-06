import 'dotenv/config';
import express from "express";
import cors from "cors";
import connectDB from "./db/dbinit";
import songRoutes from "./routes/song";
import user from "./routes/user.ts";
import errorHandler from './middleware/errorHandler.ts';
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

app.use("/api/users", user);

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});