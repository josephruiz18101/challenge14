const router = require('express').Router();
const { Comment } = require('../../../models');
const withAuth = require('../../../utils/auth');

router.post('/', withAuth, async (req, res) => {
    try {
        const commentData = await Comment.create({
            comment_author: req.session.user,
            comment_content: req.body.commentContent,
            post_id: req.body.postId
        });

        res.status(200).json(commentData);

    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
});

module.exports = router;