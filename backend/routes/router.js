const express = require('express');
const router = express.Router();

const controllerUser = require('../controllers/controllerUser');
const controllerGoods = require('../controllers/controllerGoods');
const controllerWishList = require('../controllers/controllerWishList')

router
  .route('/getgoods')
  .get(controllerGoods.gets);

router
  .route('/addidea')
  .post(controllerGoods.addidea);

router
    .route('/wishlists')
    .post(controllerWishList.addWishListToBase)
router
  .route('/registration')
  .get((req, res) => {
    res.send('ok from controller');
  })
  .post(controllerUser.registration);

router
  .route('/login')
  .get((req, res) => {
    res.send('ok');
  })
  .post(controllerUser.login);

module.exports = router;
