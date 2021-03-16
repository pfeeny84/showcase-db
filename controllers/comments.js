const Showcase = require('../models/showcase');
 
 module.exports = {
   create : createComment
 };

 function createComment(req, res) {
    Showcase.findById(req.params.id, function(err, showcase) {
      showcase.comments.push(req.body);
      showcase.save(function(err) {
        res.redirect(`/showcases/${showcase._id}`);
      });
    });
  }