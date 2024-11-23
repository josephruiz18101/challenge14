const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection'); // Ensure you import the sequelize instance

class Post extends Model {}

Post.init(
  {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    sequelize, // Pass sequelize instance here
    modelName: 'post',
    timestamps: true,
    freezeTableName: true,
    underscored: true,
  }
);

module.exports = Post;
