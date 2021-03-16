let router = require('express').Router();
const passport = require('passport');

const showcasesCtrl =require('../controllers/showcases');

router.get('/', showcasesCtrl.index);
router.get('/new', showcasesCtrl.newShowcase);
router.post('/new', showcasesCtrl.create);
router.get('/:id', showcasesCtrl.showcaseDetail);
router.delete('/:id', showcasesCtrl.delete);
// router.post('/', isLoggedIn, showcasesCtrl.addShowcase);

// custom authorization middleware function
function isLoggedIn(req, res, next){
    if(req.isAuthenticated()) return next();
    // req.isAuthenticated function is given to us by passport
    res.redirect('/auth/google')
}


module.exports = router ;