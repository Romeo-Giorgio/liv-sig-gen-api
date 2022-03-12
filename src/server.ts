//********** Imports **********//
import express from "express";
import signalersController from "./routes/signalersController";
import racePointsController from "./routes/racePointsController";
import racesController from "./routes/racesController";

export default class Server {
    readonly port: number;
    constructor (port:number){
        this.port = port;
    }
    start(){
        // Initializing express.
        const app = express();
        // Middleware to parse json throught requests.
        app.use(express.json());
        // Middleware to define route to signalers controller.
        app.use("/signalers",signalersController);
        // Middleware to define route to signalers controller.
        app.use("/races",racesController);
        // Middleware to define route to signalers controller.
        app.use("/racePoints",racePointsController);
        // Defining the port the app will listen requests.
        app.listen(this.port, () =>{
            console.log(`Server started on port ${this.port}`)
        })
    }
}