let router = require('express').Router();
let usersCtrl = require('../controllers/users');
const user = require('../models/user');

// GET /students
router.get('/users', usersCtrl.index);
router.post('/facts', isLoggedIn, usersCtrl.addFact);

// custom authorization middleware function
function isLoggedIn(req, res, next){
    if(req.isAuthenticated()) return next();
    // req.isAuthenticated function is given to us by passport
    res.redirect('/auth/google')
}


module.exports = router;