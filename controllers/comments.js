
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
    // Note the cool "dot" syntax to query on the property of a subdoc
    Showcase.findOne({'comments._id': req.params.id}, function(err, showcase) {
      // Find the comment subdoc using the id method on Mongoose arrays
      
      const commentSubdoc = showcase.comments.id(req.params.id);
      // Ensure that the comment was created by the logged in user
      
      if (!commentSubdoc.user.equals(req.user._id)) return res.redirect(`/showcases/${showcase._id}`);
    
      // Update the text of the comment
      commentSubdoc.content = req.body.text;
      console.log(commentSubdoc);
      // Save the updated book
      showcase.save(function(err) {
        // Redirect back to the book's show view
        res.redirect(`/showcases/${showcase._id}`);
      });
    });
  }