//********** Imports **********//
import express from "express";
import racePointsController from "./routes/racePointsController";
import racesController from "./routes/racesController";
import signalersController from "./routes/signalersController";
import cors from "cors";

const allowedOrigins = ["http://localhost:3000", "http://127.0.0.1:3000"];

const options: cors.CorsOptions = {
  origin: allowedOrigins,
};

export default class Server {
  readonly port: number;
  constructor(port: number) {
    this.port = port;
  }
  start() {
    // Initializing express.
    const app = express();
    // Enable CORS
    app.use(cors(options));
    // Middleware to parse json throught requests.
    app.use(express.json());
    // Middleware to define route to races controller.
    app.use("/races", racesController);
    // Middleware to define route to racePoints controller.
    app.use("/racePoints", racePointsController);
    // Middleware to define route to signalers controller.
    app.use("/signalers", signalersController);
    // Defining the port the app will listen requests.
    app.listen(this.port, () => {
      console.log(`Server started on port ${this.port}`);
    });
  }
}
