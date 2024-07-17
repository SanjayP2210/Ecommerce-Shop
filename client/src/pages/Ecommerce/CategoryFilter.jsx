import React, { useState } from 'react'

const CategoryFilter = ({ setCategory, category }) => {
   const [categories, setCategories] = useState([
     { icon: "ti ti-circles fs-", value: "", label: "All" },
     { icon: "ti ti-notebook fs-5", value: "books", label: "Books" },
     { icon: "ti ti-hanger fs-5", value: "fashion", label: "Fashion" },
     { icon: "ti ti-mood-smile fs-5", value: "toys", label: "Toys" },
     {
       icon: "ti ti-device-laptop fs-5",
       value: "electronics",
       label: "Electronics",
     },
   ]);
    return (
    <>
      {categories?.map((cat) => {
        return (
          <>
            <li className="list-group-item border-0 p-0 mx-4 mb-2">
              <a
                href="javascript:void(0)"
                className={`d-flex align-items-center gap-6 list-group-item-action text-dark px-3 py-6 rounded-1 cursor-pointer category-list-item-action
                          ${cat?.value === category ? "active" : ""}`}
                onClick={(e) => {
                  e.preventDefault();
                  setCategory(cat?.value);
                }}
              >
                <i className={cat?.icon}></i>
                {cat?.label}
              </a>
            </li>
          </>
        );
      })}
      {/* <li className="list-group-item border-0 p-0 mx-4 mb-2">
                  <a
                    className="d-flex align-items-center gap-6 list-group-item-action text-dark px-3 py-6 rounded-1"
                    href="javascript:void(0)"
                    onClick={(e) => {
                      e.preventDefault();
                      setCategory("Fashion");
                    }}
                  >
                    <i className="ti ti-hanger fs-5"></i>Fashion
                  </a>
                </li> */}
    </>
  );
};

export default CategoryFilter