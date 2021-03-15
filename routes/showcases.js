let router = require('express').Router();
const passport = require('passport');

const showcasesCtrl =require('../controllers/showcases');

router.get('/', showcasesCtrl.index);
router.get('/new', showcasesCtrl.newShowcase);
router.post('/new', showcasesCtrl.create);
router.get('/:id', showcasesCtrl.showcaseDetail);
router.delete('/:id', showcasesCtrl.delete);

module.exports = router ;