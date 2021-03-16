
const Showcase = require('../models/showcase');
 
 module.exports = {
    create
 };

 function create(req, res) {
     console.log('button clicked')
     Showcase.findById(req.params.id, function(err, showcase) {
        console.log(showcase,'this is showcase')
        // req.body.user = req.user._id;
        console.log(req.body, 'this is req.body');
        showcase.comments.push(req.body);
        showcase.save(function(err) {
        res.redirect(`/showcases/${showcase._id}`);
    });
});
}