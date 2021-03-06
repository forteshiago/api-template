import express from "express";
import routes from "./routes";

import "./database";

class App {
    constructor() {
        this.server = express();
        this.middlewares();
        this.routes();
    }

    middlewares() {
        this.server.use(express.json()); // para poder tratar os arquivos json
    }

    routes() {
        this.server.use(routes);
    }
}

// module.exports = new App(); //comum
export default new App().server