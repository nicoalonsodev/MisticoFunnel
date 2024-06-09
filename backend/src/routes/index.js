const { Router } = require("express");
const router = Router();
const multer = require("multer");
const { getOrdersHandler } = require("../handlers/getOrdersHandler");
const { getUsersHandler } = require("../handlers/getUsersHandler");
const { createOrder, receiveWebhook } = require("../controllers/paymentController");
const { postUserHandler } = require("../handlers/postUserHandler");
const { postOrderHandler } = require("../handlers/postOrderHandler");
const { putUserHandler } = require("../handlers/putUserHandler");
const { putOrderHandler } = require("../handlers/putOrderHAndler");
const { authenticateToken } = require('../helpers/authenticateToken');
const {loginHandler} = require('../handlers/authHandler');
const {protectedRouteHandler} = require('../handlers/authHandler');
const {deleteUserHandler} = require('../handlers/deleteUserHandler');


router.get("/users", getUsersHandler);
router.get("/orders", getOrdersHandler);

// router.get('/success', (req, res)=> res.send(req.query.payment_id));
// router.get('/pending', (req, res)=> res.send("pend") );
// router.get('/failure', (req, res)=> res.send("fail"));

router.post('/login', loginHandler);
router.get('/admin', authenticateToken, protectedRouteHandler);

router.post("/users", postUserHandler);
router.post("/create-order", createOrder);
router.post('/webhook', receiveWebhook);
router.post('/order', postOrderHandler);

router.put("/users/:id", putUserHandler);
router.put("/order/:id", putOrderHandler);

router.delete("/user/:id", deleteUserHandler);

module.exports = router;
