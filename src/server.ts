// equivalent of older: const express = require('express')
import express, {NextFunction, Request, Response} from 'express';
import { routes } from './router'; 

const app = express();

// Allow any method from any host and log requests
app.use((req: Request, res: Response, next: NextFunction) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, DELETE');
    if('OPTIONS' === req.method) {
        res.sendStatus(200);
    } else {
        console.log(`${req.ip} ${req.method} ${req.url}`);
        next();
    }
});

// Handle POST requests that come in formatted as JSON
app.use(express.json())
app.set('port', process.env.PORT || 4201);

app.use('/', routes)

// start our server on port 4201
app.listen(app.get('port'), '127.0.0.1', function() {
    console.log("Server now listening on 4201");
});