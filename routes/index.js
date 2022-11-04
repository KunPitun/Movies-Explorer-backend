const router = require('express').Router();
const userRouter = require('./users');
const cardsRouter = require('./movies');
const { loginValidator, registerValidator } = require('../validators/celebrate-validators');
const { register, login } = require('../controllers/users');
const auth = require('../middlewares/auth');
const NotFoundError = require('../errors/not-found-error');

router.post('/signin', loginValidator, login);
router.post('/signup', registerValidator, register);

router.use(auth);

router.use('/users', userRouter);
router.use('/movies', cardsRouter);

router.use('*', (req, res, next) => next(new NotFoundError('Страница не найдена')));

module.exports = router;
