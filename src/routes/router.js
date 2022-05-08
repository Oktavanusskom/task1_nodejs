const express = require('express');
const Controller = require('../controllers/controller');

const router = express.Router();

router.get('/', Controller.helloWorld);
router.get('/user', Controller.haiThere);
router.get('/about', Controller.About);

module.exports = router;
