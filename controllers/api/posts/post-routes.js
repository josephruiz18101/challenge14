const router = require('express').Router();
const { Comment } = require('../../../models');
const withAuth = require('../../../utils/auth');

router.post('/:postId/comments', withAuth, async (req, res) => {
  try {
    const newComment = await Comment.create({
      comment_author: req.session.user, // Adjust according to your session structure.
      comment_content: req.body.commentContent,
      post_id: req.params.postId,
    });

    res.status(200).json(newComment);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

module.exports = router;



router.put('/:id', async (req, res) => {
    try {
        const updatedPost = await BlogPost.update({
            post_title: req.body.newPostTitle,
            post_content: req.body.newPostContent
        },
        {
            where: { id: req.params.id }
        });
        
        res.status(200).json(updatedPost);
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
})


router.delete('/:id', async (req, res) => {
    try {
        const deletedPost = await BlogPost.destroy({ where: { id: req.params.id }});
        res.status(200).json(deletedPost);
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
});


module.exports = router;