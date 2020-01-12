import "core-js/stable";
import "regenerator-runtime/runtime";
//this is the one that allows me to remove trycatch  from routes
import 'express-async-errors';
import './Config/database.Config';

import express from "express";
import { Startup } from './Config/Server.Config';
import group from './routes/Group';
import User from './routes/User';
import { morganMiddleware } from './Config/morgan.Config';

//Request log and its associated Response  will have the same id
import addRequestId from 'express-request-id';
import errorHandling from './middlewares/errors';
import login from "./routes/Login";
import passport from "passport";
import { strategy } from "./Config/auth.config";
import { makeDir } from './utils/helper'
import Upload from "./routes/uploads";
import cors from 'cors'
const app = express();
makeDir(__dirname, "/Uploads/Users");
makeDir(__dirname, "/Uploads/Professor");
console.log(__filename);

passport.use(strategy);
app.use(passport.initialize())
app.use(morganMiddleware);
app.use(addRequestId());

app.use(express.json())
app.use(cors())
app.use('/api/group', group);
app.use('/api/upload', Upload);
app.use('/api/user', User);
app.use('/api/login', login);

app.use(errorHandling);

Startup(app);
