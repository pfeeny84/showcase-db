
const Showcase = require('../models/showcase');
 
 module.exports = {
    create,
    delete: deleteComment,
    update,
 };

 function create(req, res) {
    
     Showcase.findById(req.params.id, function(err, showcase) {
        req.body.user = req.user._id;
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

function update(req, res) {
    
  Showcase.findOne({'comments._id': req.params.id}, function(err, showcase) {
    const commentSubdoc = showcase.comments.id(req.params.id);
    if (!commentSubdoc.user.equals(req.user._id)) return res.redirect(`/showcases/${showcase._id}`);
    commentSubdoc.content = req.body.text;
    showcase.save(function(err) {
      res.redirect(`/showcases/${showcase._id}`);
    });
  });
}