import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import UserProfile from "../pages/profile/UserProfile";
import ProductList from "../pages/Ecommerce/ProductList";
import Shop from "../pages/Ecommerce/Shop";
import ProductDetails from "../pages/Ecommerce/ProductDetails.jsx";
import AddProduct from "../pages/Ecommerce/AddProduct";
import EditProduct from "../pages/Ecommerce/EditProduct";
import CheckoutProduct from "../pages/Ecommerce/CheckoutProduct";
import ForgetPassword from "../pages/Auth/ForgetPassword.jsx";
import ResetPassword from "../pages/ResetPassword.jsx";
import Login from "../pages/Auth/Login.jsx";
import Logout from "../pages/Logout.jsx";
import MasterForm from "../pages/CommonFormComponent/MasterForm.jsx";
import OwlCarouselComponent from "../components/OwlCarousel/OwlCarousel.jsx";
import RatingComponent from "../components/Rating/RatingComponent.jsx";
import PrivateRoute from "./PrivateRoute.jsx";

const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/auth/:pageName" element={<Login />} />
        <Route path="/auth/forget-password" element={<ForgetPassword />} />
        <Route path="/reset-password/:token" element={<ResetPassword />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/" element={<PrivateRoute />}>
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/" element={<Shop />} />
          <Route path="master/:componentName" element={<MasterForm />} />
          <Route path="eccommerce">
            <Route path="product-list" element={<ProductList />} />
            <Route path="shop" element={<Shop />} />
            <Route
              path="product-detail/:productId"
              element={<ProductDetails />}
            />
            <Route path="add-product" element={<AddProduct />} />
            <Route path="edit-product/:id" element={<EditProduct />} />
            <Route path="checkout-product" element={<CheckoutProduct />} />
          </Route>
          <Route path="component">
            <Route path="image-viewer" element={<OwlCarouselComponent />} />
            <Route path="rating-star" element={<RatingComponent />} />
          </Route>
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};

export default AppRouter;
