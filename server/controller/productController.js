import Product from '../models/Product.js';

// Create a new product
const addProduct = async (req, res) => {
    try {
        let body = req.body;
        const tags = JSON.parse(body?.tags);
        const variants = JSON.parse(body?.variants);
        const thumbnail = JSON.parse(body?.thumbnail);
        const images = JSON.parse(body?.images);
        const categories = JSON.parse(body?.categories || '{}');
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
        res.status(400).json({ message: err.message, isError: true });
    }
}

const filterByCategory = async (req, res) => {
    const categoryValue = req.params.value;
    try {
        const products = await Product.aggregate([
            { $match: { 'categories.value': categoryValue } },
            {
                $project: {
                    productName: 1,
                    basePrice: 1,
                    _id: 1,
                    modifiedAt: 1,
                    createdAt: 1,
                    image: {
                        $map: {
                            input: '$thumbnail',
                            as: 'image',
                            in: '$$image.url'
                        }
                    },
                    ratings: 1
                }
            }
        ]);
        res.json(products);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const getProductForShop = async (req, res) => {
    try {
        const { page = 1, limit = 50, search = '', sortBy = 'productName', sortOrder = 'asc', category = '', minPrice, maxPrice, gender = '', color = '' } = req.query;

        const matchStage = {
            $match: {
                ...(color ? { color } : {}),
                ...(category ? { 'categories.value': category?.trim()?.toLowerCase() } : {}),
                ...(gender ? { 'gender.value': gender?.trim() } : {}),
            }
        };

        const query = {
            ...(search ? { productName: { $regex: search, $options: 'i' } } : {}),
            ...(minPrice != null && maxPrice != null ? { basePrice: { $gte: parseFloat(minPrice), $lte: parseFloat(maxPrice) } } : {}),
        };

        if (Object.keys(query).length > 0) {
            matchStage.$match = { ...matchStage.$match, ...query };
        }

        const sortQuery = { [sortBy]: sortOrder === 'asc' ? 1 : -1 };
        const products = await Product.aggregate([
            matchStage,
            {
                $project: {
                    productName: 1,
                    basePrice: 1,
                    _id: 1,
                    image: {
                        $map: {
                            input: '$thumbnail',
                            as: 'image',
                            in: '$$image.url'
                        }
                    },
                    ratings: 1
                }
            }
        ]).sort(sortQuery)
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
        console.log("err in getProduct for shop", err);
        res.status(500).json({ message: err.message, isError: true });
    }
}

// Get all products
const getProducts = async (req, res) => {
    try {
        const { page = 1, limit = 50, search = '', sortBy = 'productName', sortOrder = 'asc' } = req.query;
        const matchStage = {};
        const query = {
            ...(search ? { productName: { $regex: search, $options: 'i' } } : {}),
        };

        matchStage.$match = Object.keys(query).length > 0 ? { ...query } : {};

        const sortQuery = { [sortBy]: sortOrder === 'asc' ? 1 : -1 };

        const products = await Product.aggregate([
            matchStage,
            {
                $project: {
                    productName: 1,
                    basePrice: 1,
                    _id: 1,
                    createdAt:1,
                    image: {
                        $map: {
                            input: '$thumbnail',
                            as: 'image',
                            in: '$$image.url'
                        }
                    },
                    categories: {
                        $map: {
                            input: '$categories',
                            as: 'category',
                            in: '$$category.value'
                        }
                    },
                    variants:1,
                    variantsType: {
                        $map: {
                            input: '$variants',
                            as: 'variant',
                            in: '$$variant.variantType.value'
                        }
                    },
                    variantsValue: {
                        $map: {
                            input: '$variants',
                            as: 'variant',
                            in: '$$variant.variantValue'
                        }
                    },
                    ratings: 1
                }
            }
        ]).sort(sortQuery)
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
        res.status(500).json({ message: err.message, isError: true });
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
        res.status(400).json({ message: err.message, isError: true });
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
        const { rating, comment, productId,userId } = req.body;

        const review = {
            user: userId,
            productId,
            name: req?.user?.name || 'sanjay',
            rating: Number(rating),
            comment,
        };
        // const userId = "66715d2df7321f79928501dd";

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
const deleteReview = async (req, res, next) => {
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
    filterByCategory,
    getProductForShop
}