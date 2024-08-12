import React, { useEffect, useState } from "react";
import apiService from "../../../service/apiService";
import { toast } from "react-toastify";

const CategoryFilter = ({ setCategory, category, categoriesList }) => {
  // [
  //   { icon: "ti ti-circles", value: "", label: "All" },
  //   { icon: "ti ti-notebook ", value: "books", label: "Books" },
  //   { icon: "ti ti-hanger ", value: "fashion", label: "Fashion" },
  //   { icon: "ti ti-mood-smile ", value: "toys", label: "Toys" },
  //   {
  //     icon: "ti ti-device-laptop ",
  //     value: "electronics",
  //     label: "Electronics",
  //   },
  // ];

  return (
    <>
      {categoriesList?.map((cat,index) => {
        return (
          <>
            <li key={index} className="list-group-item border-0 p-0 mx-4 mb-2">
              <a
                href="javascript:void(0)"
                className={`d-flex align-items-center gap-6 list-group-item-action text-dark px-3 py-6 rounded-1 cursor-pointer category-list-item-action
                          ${cat?.value === category ? "active" : ""}`}
                onClick={(e) => {
                  e.preventDefault();
                  setCategory(cat?.value);
                }}
                style={{ textTransform: "capitalize" }}
              >
                <i className={`${cat?.icon} fs-5`}></i>
                {cat?.label}
              </a>
            </li>
          </>
        );
      })}
    </>
  );
};

export default CategoryFilter;
