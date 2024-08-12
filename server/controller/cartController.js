import moment from 'moment-timezone';
import Cart from '../models/Cart.js';

export const getCart = async (req, res) => {
    try {
        let cart = await Cart.findOne({ user: req.user._id },
            {
                totalPrice: 1,
                totalCount: 1,
                'items.quantity': 1,
                'items.price': 1
            })
            .populate({
                path: 'items.product',
                select: '_id updatedPrice thumbnail stock productName'
            });
        if (cart) {
            cart = cart.toObject();
            cart.items = cart.items.map(item => ({
                ...item.product,
                productId: item?.product?._id,
                quantity: item?.quantity,
                price: item?.price,
                image : item?.product?.thumbnail[0]?.url
            }));
        }
        res.json({
            isError: false,
            message: 'Cart fetched successfully',
            cart
        });
    } catch (error) {
        res.status(404).send({ message: 'error while getting cart', isError: true });
        console.log('error while getting cart', error);
    }
};

export const addToCart = async (req, res) => {
try {
    const { productId, quantity, price,...rest } = req.body;
    const userId = req.user._id;
    let cart = await Cart.findOne({ user: userId });
    let updatedQuantity = 1;
    if (cart) {
        const existingProductIndex = cart.items.findIndex(item => item.product.toString() === productId);
        if (existingProductIndex !== -1) {
            cart.items[existingProductIndex].quantity += quantity;
            updatedQuantity = cart.items[existingProductIndex].quantity;
        } else {
            cart.items.push({ product: productId, quantity, price });
        }
    } else {
        cart = new Cart({
            user: userId,
            items: [{ product: productId, quantity, price}],
            createdBy: userId,
            modifiedBy: userId,
            createdAt: moment().tz('Asia/Kolkata').format(),
            modifiedAt: moment().tz('Asia/Kolkata').format(),
        });
    }

    cart.totalCount = cart.items.reduce((total, item) => total + item.quantity, 0);
    cart.totalPrice = cart.items.reduce((total, item) => {
        return total + (item.price * item.quantity);
    }, 0);
    cart.modifiedBy = userId;
    cart.modifiedAt = moment().tz('Asia/Kolkata').format();
    await cart.save();
    let item = {
        _id: productId,
        productId,
        quantity: updatedQuantity,
        price,
        ...rest
    };

    res.status(200).json({
        message: 'Item added to cart!',
        isError: false,
        cart: {
            item,
            totalCount: cart?.totalCount,
            totalPrice: cart?.totalPrice
        },
        productId,
    });
} catch (error) {
    res.status(404).send({ message: 'error while creating new cart',isError: true });
    console.log('error while creating new cart', error);
}
};

export const removeFromCart = async (req, res) => {
    try {
        const { productId } = req.params;
        const userId = req.user._id;
        const cart = await Cart.findOne({ user: userId });

        if (cart) {
            const existingItem = cart.items.find((item) => item.product.toString() === productId);

            if (existingItem) {
                if (existingItem.quantity === 1) {
                    cart.items = cart.items.filter((item) => item.product.toString() !== productId);
                } else {
                    existingItem.quantity -= 1;
                }

                cart.totalCount -= 1;
                cart.totalPrice -= existingItem.price;
            } else {
            }
            await cart.save();
            res.status(200).json({
                message: 'Item removed from cart!',
                isError: false,
                cart: {
                    totalCount: cart.totalCount,
                    totalPrice: cart.totalPrice
                },
                productId,
            });
            // cart.items = cart.items.filter(item => item.product.toString() !== productId);

            // cart.totalCount = cart.items.reduce((total, item) => total + item.quantity, 0);
            // cart.totalPrice = cart.items.reduce((total, item) => {
            //     return total + (item.price * item.quantity);
            // }, 0);

            // cart.modifiedBy = userId;
            // cart.modifiedAt = moment().tz('Asia/Kolkata').format();

            // await cart.save();
            // res.status(200).json({
            //     message: 'Item removed from cart!',
            //     isError: false,
            //     cart:cart
            // });
        } else {
            res.status(404).json({ message: 'Cart not found' });
        }
    } catch (error) {
        res.status(404).send({ message: 'error while removing cart', isError: true });
        console.log('error while remove cart', error);
    }
};