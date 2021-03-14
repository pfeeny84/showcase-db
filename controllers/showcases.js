const Showcase = require('../models/showcase')

module.exports = {
    index
}

function index(req, res) {
    res.render('showcases/index')
}
  
