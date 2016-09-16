'use strict'
/***** import node.js librarie *****/

/***** import third-party libraries *****/

/***** import own libraries *****/
import express from 'express';


import config from './app/configs/index';
import router from './app/routes/routes';

const app = express();

router(app);

app.listen(config.portConfig, () =>{
	console.log("server start on " + config.portConfig);
});