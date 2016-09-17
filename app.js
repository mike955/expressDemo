'use strict'
/***** import node.js librarie *****/

/***** import third-party libraries *****/
import express from 'express';

/***** import own libraries *****/
import config from './app/configs/index';
import router from './app/routes/routes';

const app = express();

/*********路由*********/
router(app);


/*********服务器监听端口*********/
app.listen(config.portConfig, () =>{
	console.log("server start on " + config.portConfig);
});