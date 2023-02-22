const Router = require('express').Router;
const UserController = require('../controllers/user-controller');
const MarketController = require('../controllers/market-controller');
const userLogginedMiddleware = require('../middleware/authMiddleware');

const router = new Router();

router.post('/user/login', UserController.login);
router.post('/market/item', userLogginedMiddleware, MarketController.addItem);
router.get('/market/item', MarketController.getItems);
router.get('/market/item/:id', MarketController.getItemById);

module.exports = router;