const { Post, User, Comment } = require('../models');
const withAuth = require('../utils/auth');

// Logic for creating new posts and comments
async function createPost(req, res) {
    try {
        const newPost = await Post.create({
            title: req.body.title,
            content: req.body.content,
            user_id: req.session.user_id,
        });
        res.redirect('/');
    } catch (err) {
        res.status(500).json(err);
    }
}

async function createComment(req, res) {
    try {
        const newComment = await Comment.create({
            content: req.body.content,
            post_id: req.body.post_id,
            user_id: req.session.user_id,
        });
        res.redirect(`/post/${req.body.post_id}`);
    } catch (err) {
        res.status(500).json(err);
    }
}

module.exports = { createPost, createComment };
