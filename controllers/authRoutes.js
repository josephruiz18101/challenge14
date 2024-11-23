const router = require('express').Router();
const { User } = require('../challenge14/models');

// Handle user login
router.post('/login', async (req, res) => {
    try {
        const userData = await User.findOne({
            where: {
                email: req.body.email,
            },
        });

        if (!userData) {
            return res.status(400).json({ message: 'Incorrect email or password.' });
        }

        const validPassword = userData.checkPassword(req.body.password);

        if (!validPassword) {
            return res.status(400).json({ message: 'Incorrect email or password.' });
        }

        req.session.save(() => {
            req.session.logged_in = true;
            req.session.user_id = userData.id; // Save the user ID in the session
            res.json({ user: userData, message: 'You are now logged in!' });
        });
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
});

module.exports = router;
