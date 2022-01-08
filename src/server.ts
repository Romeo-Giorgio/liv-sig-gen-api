//********** Imports **********//
import express from "express";
import signalersController from "./routes/signalersController";
import trackPointsController from "./routes/trackPointsController";
import tracksController from "./routes/tracksController";

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
        app.use("/tracks",tracksController);
        // Middleware to define route to signalers controller.
        app.use("/trackPoints",trackPointsController);
        // Defining the port the app will listen requests.
        app.listen(this.port, () =>{
            console.log(`Server started on port ${this.port}`)
        })
    }
}