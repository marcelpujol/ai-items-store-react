import express, { Application } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import routes from "./routes";

const app: Application = express();
app.use(bodyParser.json());
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.use("/api", routes);

export default app;
