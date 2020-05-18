const router = require('express').Router();
const path = require('path');

const apiRoutes = require('./apiRoutes');

const htmlRoutes= require('./htmlRoutes');

router.use('/api', apiRoutes);

router.use(htmlRoutes);

module.exports = router;