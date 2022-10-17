const router = require('express').Router();
const { updateUserValidator } = require('../validators/celebrate-validators');
const { getUserMe, updateUser } = require('../controllers/users');

router.get('/me', getUserMe);
router.patch('/me', updateUserValidator, updateUser);

module.exports = router;
