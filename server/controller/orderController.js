import Order from '../models/Order.js';

export const createOrder = async (req, res) => {
    const { items, totalAmount } = req.body;

    const newOrder = new Order({
        user: req.user._id,
        items,
        totalAmount,
    });

    const savedOrder = await newOrder.save();
    res.status(201).send(savedOrder);
};

export const getOrder = async (req, res) => {
    const order = await Order.findById(req.params.id).populate('items.product');
    res.json(order);
};
