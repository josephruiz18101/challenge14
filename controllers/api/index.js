const router = require('express').Router();

const postRoutes = require('./posts/post-routes');
const commentRoutes = require('./comments/comment-routes');
const userRoutes = require('./users/user-routes');


router.use('/posts', postRoutes);
router.use('/users', userRoutes);
router.use('/comment', commentRoutes);

module.exports = router;