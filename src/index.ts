import * as express from "express"
import * as bodyParser from "body-parser"
import { Request, Response } from "express"
import { AppDataSource } from "./data-source"
import { Routes } from "./routes"
import { User } from "./entity/User"
import userRouter from "./routes/user.router"

AppDataSource.initialize()
    .then(async () => {
    // create express app
    const app = express()
    app.use(bodyParser.json())
    app.use('/public', userRouter);
    app.listen(3000);

    console.log("Express server has started on port 3000. Open http://localhost:3000/users to see results")

}).catch(error => console.log(error))
