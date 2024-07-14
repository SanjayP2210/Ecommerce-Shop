import { Navigate, Outlet } from "react-router-dom";
import { LogoutUser, getJWTToken } from "../constants/utilities";
import { toast } from "react-toastify";
import Navbar from "../components/Navbar/Navbar";
import { useDispatch } from "react-redux";
import { logoutUser } from "../reducers/authReducer";
import { resetUserState } from "../reducers/userReducer";

const PrivateRoute = () => {
  // const token = getJWTToken();
  // const dispatch = useDispatch();
  // if (!token) {
  //   toast.error("token not available.please login again");
  //   LogoutUser();
  //   dispatch(logoutUser());
  //   dispatch(resetUserState());
  // }
  return (
    <>
      <div id="main-wrapper">
        <div className="page-wrapper">
          <div className="body-wrapper">
            <Navbar />
                    <Outlet />
          </div>
        </div>
      </div>
    </>
  );
  // return token ? (
  //   <>
  //     <Navbar />
  //     <div className="page-wrapper" id="main-wrapper">
  //       <div className="body-wrapper">
  //         <div className="body-wrapper-inner">
  //           <div className="container-fluid">
  //             <Outlet />
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   </>
  // ) : (
  //   <Navigate to="/" />
  // );
};

export default PrivateRoute;
