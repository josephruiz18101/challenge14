const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userData = [
    {
        username: 'johndoe',
        email: 'johndoe@example.com',
        password: 'password123',
    },
    {
        username: 'janedoe',
        email: 'janedoe@example.com',
        password: 'password123',
    },
];

const postData = [
    {
        title: 'Understanding JavaScript Closures',
        content: 'Closures are a fundamental concept in JavaScript...',
        user_id: 1,
    },
    {
        title: 'Tips for Debugging Code',
        content: 'Debugging can be challenging. Here are some tips...',
        user_id: 2,
    },
];

const seedDatabase = async () => {
    await sequelize.sync({ force: true });

    const users = await User.bulkCreate(userData, {
        individualHooks: true,
        returning: true,
    });

    const posts = await Post.bulkCreate(postData);

    console.log('Database seeded successfully!');
    process.exit(0);
};

seedDatabase();
