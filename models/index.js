const BlogPost = require('./BlogPost');
const Comment = require('./Comment');
const User = require('./User');

BlogPost.hasMany(Comment, {
    foreignKey: 'post_id'
});

Comment.belongsTo(BlogPost, {
    foreignKey: 'post_id'
});

module.exports = { BlogPost, Comment, User }