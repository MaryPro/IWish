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
    .get(controllerWishList.getWishList)
    .delete(controllerWishList.deleteWishList)
router
  .route('/registration')
  .get((req, res) => {
    res.send('ok from controller');
  })
  .post(controllerUser.registration);
router
    .route('/share')
    .get(controllerWishList.getWishListShare)

router
  .route('/login')
  .get((req, res) => {
    res.send('ok');
  })
  .post(controllerUser.login);

  router
  .route('/upload')
  .post(controllerUser.sendAvatar)

  router
   .route('/users')
   .get(controllerUser.getUser)

  router
    .route('/saveidea')
    .post(controllerWishList.saveidea)

module.exports = router;
