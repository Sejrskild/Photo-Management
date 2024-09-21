import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import morgan from "morgan";

dotenv.config();

const PORT = process.env.PORT;
const app = express();

// Express Routers
import authRoutes from "./routes/authRoutes.js";

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
app.use(morgan("dev"));

app.use("/api/auth", authRoutes);

app.get("/api", (req, res) => {
  res.status(200).json({ message: "Works" });
});

app.listen(PORT, () => {
  console.log("App listens on PORT 3000..");
});
