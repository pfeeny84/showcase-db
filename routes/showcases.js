let router = require('express').Router();
const passport = require('passport');

const showcasesCtrl =require('../controllers/showcases');

router.get('/showcases', showcasesCtrl.index);
router.get('/showcases/new', showcasesCtrl.newShowcase);
router.post('/showcases/new', showcasesCtrl.create);
router.get('/showcases/:id', showcasesCtrl.showcaseDetail);
router.delete('showcases/:id', showcasesCtrl.delete);

module.exports = router ;