import express from "express";
import {
    deleteUser,
    getUser,
    getUserById,
    updateUser,
    sendEmail,
    updatePassword,
    updateUserTheme
} from "../controller/userController.js";
import authMiddleWare from "../middleware/authMiddleware.js";
import { adminMiddleware } from "../middleware/admin-middleware.js";
import { uploadImages, deleteImages } from "../controller/commonController.js";
const router = express.Router();

// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         cb(null, 'public/images');
//     },
//     filename: function (req, file, cb) {
//         cb(null, file.fieldname + "_" + Date.now() + path.extname(file.originalname));
//     },
// });

// const upload = multer({ storage: storage });

// router.get("/upload-image", getImage);
// router.post('/upload-image', upload.single('image'), uploadImage)
// router.delete("/upload-image/:id", deleteImage);

// user routes
router.get("/", authMiddleWare, adminMiddleware, getUser);
router.get("/:id", authMiddleWare, adminMiddleware, getUserById);
router.get("/me/:id", authMiddleWare, getUserById);
router.patch("/:id", authMiddleWare, adminMiddleware, updateUser);
router.delete("/:id", authMiddleWare, adminMiddleware, deleteUser);
router.post("/sendMail", sendEmail);
router.post("/reset-password", updatePassword);
router.post("/upload-image", uploadImages);
router.delete("/delete-image/:public_id", deleteImages);
router.put("/theme/:id", updateUserTheme);
export default router;
