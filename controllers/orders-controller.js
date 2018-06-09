const asyncMiddleware = require('../middleware/async');
const Joi = require('joi');
const { Order, validate } = require('../models/order');
const userDao = require('../mongo_dal/users-dao');
const orderDao = require('../mongo_dal/orders-dao');
const _ = require('lodash');
const auth = require('../middleware/auth');
const express = require('express');
const router = express.Router();
//Controller for handling ticket purchasing


router.post('/', [auth], async (req, res) => {
    try {

        let ticket = req.body;

        //mongodb retrieved user
        const foundUser = await userDao.getById(ticket.user);

        //lodash object dismantle
        ticket.user = _.pick(foundUser, ['_id', 'username', 'email']);

        //joi validation
        const { error } = validate(ticket);
        if (error) return res.status(400).send('Cannot purchase ticket.');

        const order = await orderDao.saveOrder(ticket);

        res.send(order);
    } catch (e) {
        console.log(e);
    }
}
);
module.exports = router;