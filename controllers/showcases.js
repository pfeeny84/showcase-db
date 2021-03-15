const Showcase = require('../models/showcase')

module.exports = {
    index,
    newShowcase,
    create,
    showcaseDetail
}

function index(req, res) {
    Showcase.find({}, function(err, showcases){
        res.render('showcases/index', {title: 'All Showcases', showcases})

    });
};

function newShowcase(req, res){
    
    res.render('showcases/new')
}
  
function create(req, res){
    
    const showcase = new Showcase(req.body);
    showcase.save(function(err){
        if(err) {
            return res.render("showcases/new");
        }   
        else {
            console.log('this is a place')
            res.redirect("/showcases");
        }
            
        })
}

function showcaseDetail(req, res){
    Showcase.findById(req.params.id, function(err, showcase){
        
        console.log(showcase);
        res.render('showcases/detail', {showcase: showcase})
    });
};  

