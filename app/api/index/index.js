'use strict';

import express from 'express';


import Index  from '../../controllers/index/index';

const router = express.Router();

router
	.get('/', Index.demo);

module.exports = router;	