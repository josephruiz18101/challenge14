const router = require('express').Router();
const BlogPost = require('../models/BlogPost');
const Comment = require('../models/Comment');
const withAuth = require('../utils/auth');


// GET a single blog post
router.get('/:id', withAuth, async (req, res) => {
    // Redirects users to login if not logged in
    try {
        const postData = await BlogPost.findByPk(req.params.id);
        const commentData = await Comment.findAll({ where: { post_id: req.params.id } });

        const post = postData.get({ plain: true });
        const comments = commentData.map((comment) => comment.get({ plain: true }));

        const canEdit = req.session.user == post.post_author;

        res.render('post', { post, comments, loggedIn: req.session.loggedIn, canEdit });
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
});


module.exports = router;