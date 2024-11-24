const router = require('express').Router();
const BlogPost = require('../models/BlogPost');
const withAuth = require('../utils/auth');

// Get all Blog posts for home page
router.get('/', async (req, res) => {
    try {
        const blogPostsData = await BlogPost.findAll({
            order: [['post_date', 'DESC']]
        });
        
        const plainPosts = blogPostsData.map((posts) => posts.get({ plain: true }));
       
        res.render('homepage', { plainPosts, loggedIn: req.session.loggedIn });

    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
});

router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    };

    res.render('login');
});

module.exports = router;