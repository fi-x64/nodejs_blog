const express = require('express');
const route = require('.');
const router = express.Router();

const siteController = require('../app/controllers/SiteController');

// newsController.index();
router.use('/search', siteController.search);

router.use('/', siteController.index);

module.exports = router;
