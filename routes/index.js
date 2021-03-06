
const path = require('path');

const express = require('express');
const request = require('request');


const router = express.Router();


const indexRouter = require('../controller/control');



router.get('/',indexRouter.getIndexPage);
router.get('/results', indexRouter.getResults);
router.get('/search',indexRouter.search);



router.get('*', indexRouter.pageNotFound);

    




module.exports = router;