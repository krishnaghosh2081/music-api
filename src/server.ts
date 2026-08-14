import express from "express";
import cors from "cors";
import connectDB from "./db/dbinit.ts";
import songRoutes from "./routes/song.ts";
import user from "./routes/user.ts";
import errorHandler from './middleware/errorHandler.ts';
import agent from './routes/agent.ts';
import stem from "./routes/stem.ts";


const app =express();

connectDB();
//seedDB();

const port = process.env.PORT || 5000;

// middleware
app.use(express.json());
app.use(cors());


app.get("/", (req, res) => {
  res.send("Hello Welcome Music lovers...");
});

//Routes
app.use("/api/users", user);
app.use("/api/agent-stream", agent);
app.use("/api/songs", songRoutes);
app.use("/api/stems", stem);

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});