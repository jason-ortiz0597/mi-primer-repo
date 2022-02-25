const router = require('express').Router();
const authController = require('../controllers/authControllers');

router.get('/login', authController.login);
router.post('/login', authController.loginpost);
router.get('/register', authController.register);
router.post('/register', authController.registerpost);
router.get('/recover', authController.recover);
router.post('/recover', authController.recoverpost);

module.exports = router;



