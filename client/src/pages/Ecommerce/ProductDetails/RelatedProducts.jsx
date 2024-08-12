import React, { useEffect, useState } from "react";
import apiService from "../../../service/apiService";
import RatingComponent from "../../../components/Rating/RatingComponent";
import { useNavigate } from "react-router-dom";

const RelatedProducts = ({ productId }) => {
  const navigate = useNavigate();
  const [relatedProducts, setRelatedProducts] = useState([]);


   const getSelectedProductDetails = (productId) => {
     navigate(`/eccommerce/product-detail/${productId}`);
   };

  useEffect(() => {
    const fetchRelatedProducts = async () => {
      try {
        const response = await apiService.getRequest(
          `product/related/${productId}`
        );
        if(response?.relatedProducts){
          setRelatedProducts(response?.relatedProducts);
        }
      } catch (error) {
        console.error("Error fetching related products", error);
      }
    };

    fetchRelatedProducts();
  }, [productId]);

  return (
    <div className="related-products pt-7">
      <h4 className="mb-3 fw-semibold">Related Products</h4>
      <div className="row">
        {relatedProducts?.map((product,index) => {
          const { image, productName, updatedPrice, basePrice, ratings } =
            product;
          return (
            <>
              <div key={product._id} className="col-md-6 col-xxl-3">
                <div
                  className="card overflow-hidden rounded-2"
                >
                  <div className="position-relative">
                    <a
                      href="javascript:void(0)"
                      className="hover-img d-block overflow-hidden"
                      onClick={(e) => {
                        e.preventDefault();
                        getSelectedProductDetails(product?._id);
                      }}
                    >
                      <img
                        src={image}
                        className="card-img-top rounded-0"
                        alt="matdash-img"
                      />
                    </a>
                  </div>
                  <div className="card-body pt-3 p-4">
                    <h6 className="fw-semibold fs-4">{productName}</h6>
                    <div className="d-flex align-items-center justify-content-between">
                      <h6 className="fw-semibold fs-4 mb-0">
                        {updatedPrice}{" "}
                        <span className="ms-2 fw-normal text-muted fs-3">
                          <del>{basePrice}</del>
                        </span>
                      </h6>
                      <RatingComponent
                        rating={ratings}
                        readOnly={true}
                        size={20}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default RelatedProducts;
