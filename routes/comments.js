let router = require('express').Router();
const commentsCtrl = require('../controllers/comments');

router.post('/showcases/:id/comments', commentsCtrl.create);
router.delete('/comments/:id', commentsCtrl.delete);
router.put('/comments/:id', commentsCtrl.update);

module.exports = router;