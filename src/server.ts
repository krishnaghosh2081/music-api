import express from "express";
import cors from "cors";
import connectDB from "./db/dbinit.ts";
import user from "./routes/user.ts";
import authRoutes from "./routes/auth.ts";
import errorHandler from './middleware/errorHandler.ts';

const app = express();

connectDB();

const port = process.env.PORT || 5000;

// middleware
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    res.send("Hello Welcome Music lovers...");
});

app.use("/api/users", user);
app.use("/api/auth", authRoutes); // <-- Add this

app.use(errorHandler);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});