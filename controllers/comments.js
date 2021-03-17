
const Showcase = require('../models/showcase');
 
 module.exports = {
    create,
    delete: deleteComment
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

function deleteComment(req, res) {
   Showcase.findOne({'comments._id': req.params.id}, function(err, showcase) {
        const commentSubdoc = showcase.comments.id(req.params.id);
        commentSubdoc.remove();
        showcase.save(function(err) {
            res.redirect(`/showcases/${showcase._id}`);
        });
    });
}