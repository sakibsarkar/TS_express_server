import express from "express";
import { Server } from "http";
import morgan from "morgan";
import routes from "./routes";

const app = express();
const port = 5000;

// middleweres
app.use(express.json());
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.send("Hello from server");
});

app.use("/api", routes);
app.set("view engine", "html");

let server: Server;

const startServer = async () => {
  server = app.listen(port, () => {
    console.log("SERVER IS RUNNING");
  });
};

startServer();

export default app;
