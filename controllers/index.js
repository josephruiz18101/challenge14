const router = require('express').Router();

const apiRoutes = require('./api');
const postRoutes = require('./post-routes');
const homeRoutes = require('./home-routes');

router.use('/', homeRoutes);
router.use('/posts', postRoutes);
router.use('/api', apiRoutes);

module.exports = router;