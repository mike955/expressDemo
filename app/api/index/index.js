'use strict';

import express from 'express';


import Demo  from '../../controllers/index/demo';

const router = express.Router();

router
	.get('/', Demo.add);

module.exports = router;	