import Product from '../models/Product.js';

// Create a new product
const addProduct = async (req, res) => {
    try {
        let body = req.body;
        const tags = JSON.parse(body?.tags);
        const variants = JSON.parse(body?.variants);
        const thumbnail = JSON.parse(body?.thumbnail);
        const images = JSON.parse(body?.images);
        const categories = JSON.parse(body?.categories);
        const status = JSON.parse(body?.status);

        body = {
            ...body,
            tags,
            variants,
            thumbnail,
            images,
            categories,
            status,
            createdAt: Date.now(),
            createdBy: req?.user?._id?.toString() || "66715d2df7321f79928501dd", 
            modifiedAt: Date.now(),
            modifiedBy: req?.user?._id?.toString() || "66715d2df7321f79928501dd"
        };
        const newProduct = await Product.create(body);
        res.status(201).json({
            message: "Product saved successfully",
            Product: newProduct,
        });
    } catch (err) {
        console.log('error addProduct', err);
        res.status(400).json({ message: err.message,isError: true });
    }
}

// Get all products
const getProducts = async (req, res) => {
    try {
        const { page = 1, limit = 5, search = '', sortBy = 'productName', sortOrder = 'asc' } = req.query;

        const query = {
            productName: { $regex: search, $options: 'i' }
        };

        const sortQuery = { [sortBy]: sortOrder === 'asc' ? 1 : -1 };

        const products = await Product.find(query)
            .sort(sortQuery)
            .limit(limit * 1)
            .skip((page - 1) * limit)
            .exec();

        const count = await Product.countDocuments(query);

        res.json({
            products,
            totalPages: Math.ceil(count / limit),
            currentPage: page,
        });
    } catch (err) {
        console.log("err in getProduct", err);
        res.status(500).json({ message: err.message ,isError:true});
    }
}

// Get a single product
const getProductById = async (req, res) => {
    try {
        console.log("req.params.id", req.params.id);
        const data = await Product.findById(req.params.id);
        console.log("data", data);
        res.json({ productData: data });
    } catch (err) {
        console.log("err in getProductById", err);
    }
}

// Update a product
const updateProduct = async (req, res) => {
    try {
        let body = req.body;
        const tags = JSON.parse(body?.tags);
        const variants = JSON.parse(body?.variants);
        const thumbnail = JSON.parse(body?.thumbnail);
        const images = JSON.parse(body?.images);
        const categories = JSON.parse(body?.categories);
        const status = JSON.parse(body?.status);
        res.product = {
            ...body,
            tags,
            variants,
            thumbnail,
            images,
            categories,
            status,
            modifiedAt: Date.now(),
            modifiedBy: req?.user?._id?.toString()
        };
        const updatedProduct = await res.product.save();
        res.json({ message: 'Product Updated Successfully', product: updatedProduct });
    } catch (err) {
        console.log('error updateProduct', error);
        res.status(400).json({ message: err.message,isError: true });
    }
}

// Delete a product
const deleteProduct = async (req, res) => {
    try {
        const id = req.params.id;
        const product = await Product.deleteOne({ _id: id });
        res.json({ message: 'Deleted Product', product });
    } catch (err) {
        console.log('error delete Product', err);
        res.status(400).json({ message: err.message, isError: true });
    }
}

// Create New Review or Update the review
const createProductReview = async (req, res) => {
    try {
        const { rating, comment, productId } = req.body;

        const review = {
            user: "66715d2df7321f79928501dd",
            productId,
            name: req?.user?.name || 'sanjay',
            rating: Number(rating),
            comment,
        };
        const userId = "66715d2df7321f79928501dd";

        const product = await Product.findById(productId);

        const isReviewed = product.reviews.find(
            (rev) => rev?.user?.toString() === (req?.user?._id?.toString() || userId)
        );

        if (isReviewed) {
            product.reviews.forEach((rev) => {
                if (rev?.user?.toString() === (req?.user?._id?.toString() || userId))
                    (rev.rating = rating), (rev.comment = comment), (rev.modifiedAt = Date.now());
            });
        } else {
            product.reviews.push(review);
            product.numOfReviews = product.reviews.length;
        }

        let avg = 0;

        product.reviews.forEach((rev) => {
            avg += rev.rating;
        });

        product.ratings = avg / product.reviews.length;

        const respomse = await product.save({ validateBeforeSave: false });
        if (respomse) {
            res.status(200).json({
                success: true,
                message: "Review saved successfully",
            });
        }
    } catch (error) {
        console.log('error create review Product', error);
        res.status(400).json({ message: err.message, isError: true });
    }
}

// Get All Reviews of a product
const getProductReviews = async (req, res, next) => {
    const product = await Product.findById(req.query.id);

    if (!product) {
        return next(new ErrorHander("Product not found", 404));
    }

    res.status(200).json({
        success: true,
        reviews: product.reviews,
    });
}

// Delete Review
const deleteReview =async (req, res, next) => {
    const product = await Product.findById(req.query.productId);

    if (!product) {
        return next(new ErrorHander("Product not found", 404));
    }

    const reviews = product.reviews.filter(
        (rev) => rev._id.toString() !== req.query.id.toString()
    );

    let avg = 0;

    reviews.forEach((rev) => {
        avg += rev.rating;
    });

    let ratings = 0;

    if (reviews.length === 0) {
        ratings = 0;
    } else {
        ratings = avg / reviews.length;
    }

    const numOfReviews = reviews.length;

    await Product.findByIdAndUpdate(
        req.query.productId,
        {
            reviews,
            ratings,
            numOfReviews,
        },
        {
            new: true,
            runValidators: true,
            useFindAndModify: false,
        }
    );

    res.status(200).json({
        success: true,
    });
}

export {
    deleteProduct,
    addProduct,
    updateProduct,
    getProductById,
    getProducts,
    createProductReview,
    getProductReviews,
    deleteReview,
}