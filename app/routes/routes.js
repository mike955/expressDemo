'use strict';

import index from '../api/index/index';

module.exports = function(app) {
	app.use('/', index);

	app.use('/*', function(req, res, next){
		return res.send('Hello , please check your URL and make is sure true');
	})
}