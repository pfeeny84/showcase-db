const Showcase = require('../models/showcase');
const user = require('../models/user');
const User = require('../models/user')

module.exports = {
    index,
    newShowcase,
    create,
    showcaseDetail,
    delete: deleteShowcase,
    // addShowcase,
    
}

// function addShowcase(req, res){
//     console.log(req.user, ' req.user');
  
//     // req.user is the mongoose document of our logged in user
//     showcases.push(req.body);
//     // if mutate a document we have to save it
//     save(function(err) {
//       res.redirect('/showcases')
//     })
//   }

function deleteShowcase(req,res) {
    console.log(req.params.id, 'this is id')
    Showcase.findByIdAndDelete(req.params.id, function(err, deletedDoc){
        console.log(deletedDoc, 'this is deleted doc')
        res.redirect('/showcases');

    });
    
}


function index(req, res) {
    // Showcase.find(user_id: req.body.user_id, function(err,user){
    //     const showcase = new Showcase(req.body);
    //     console.log(showcase);
    //     user.save(function(err){
    //         res.redirect('/showcases');
    //     });
    // });

    console.log(req.user, 'this is req');
    console.log(req.user._id, 'this is user')

    
    Showcase.find({'user': req.user._id}, function(err, foundShowcases){
        // console.log(foundShowcases, 'this is foundShowcases')
        res.render('showcases/index', {showcases: foundShowcases })
    //     // res.redirect('/showcases');

    });
    //  console.log(showcases)  
  

    }


function newShowcase(req, res){
    
    res.render('showcases/new')
}
  
function create(req, res){
    
  
    req.body.user = req.user._id
    console.log(req.body, 'this is req');
    const showcase = new Showcase(req.body);
    showcase.save(function(err){
        res.redirect('/showcases');
    });

    
    // showcase.save(function(err){
    //     if(err) {
    //         return res.render("showcases/new");
    //     }   
    //     else {
    //         // console.log('this is a place')
    //         res.redirect("/showcases");
    //     }
            
    //     })
}

function showcaseDetail(req, res){
    Showcase.findById(req.params.id, function(err, showcase){
        console.log(req.params.id);
        console.log(showcase);
        res.render('showcases/detail', {showcase: showcase})
    });
};  

