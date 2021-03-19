const Showcase = require('../models/showcase');


module.exports = {
    index,
    newShowcase,
    create,
    showcaseDetail,
    delete: deleteShowcase,
    
    
}

function deleteShowcase(req,res) {
    Showcase.findByIdAndDelete(req.params.id, function(err, deletedDoc){
        res.redirect('/showcases');

    });
    
}


function index(req, res) {
Showcase.find({'user': req.user._id}, function(err, foundShowcases){
    res.render('showcases/index', {showcases: foundShowcases })
});
}


function newShowcase(req, res){
    res.render('showcases/new')
}
  
function create(req, res){
    req.body.user = req.user._id
    const showcase = new Showcase(req.body);
    showcase.save(function(err){
        res.redirect('/showcases');
});
}

function showcaseDetail(req, res){
    Showcase.findById(req.params.id, function(err, showcase){
        res.render('showcases/detail', {showcase: showcase})
    });
};  

