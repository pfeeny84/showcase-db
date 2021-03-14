let router = require('express').Router();
const passport = require('passport');

const showcasesCtrl =require('../controllers/showcases')

router.get('/showcases', showcasesCtrl.index);

module.exports = router ;