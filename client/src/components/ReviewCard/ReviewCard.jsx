import React from "react";
import profilePng from "../../assets/images/profile/user-1.jpg";
import RatingComponent from "../Rating/RatingComponent";
import "./index.css";

const ReviewCard = ({ reviews }) => {
    function formatDate(isoString) {
        const date = new Date(isoString);

        // Helper function to pad single digits with leading zero
        const pad = (num) => (num < 10 ? "0" + num : num);

        // Extract date components
        const day = pad(date.getUTCDate());
        const month = pad(date.getUTCMonth() + 1); // Months are zero-indexed
        const year = date.getUTCFullYear().toString().slice(-2); // Get last two digits of the year
        const hours = pad(date.getUTCHours());
        const minutes = pad(date.getUTCMinutes());

        // Array of weekday names
        const weekdays = [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
        ];
        const weekday = weekdays[date.getUTCDay()];

        // Format date and time
        const formattedDate = `${day}/${month}/${year}`;
        const formattedTime = `${hours}:${minutes}`;

        return `${formattedDate} ${formattedTime} ${weekday}`;
    }

    return (
      <>
        <div className="card">
          <div className="card-body">
            <h4 className="card-title mb-7">Customer Reviews</h4>
            <div className="table-responsive mb-4 rounded-1">
              <table className="table mb-0 align-middle">
                <thead className="text-dark fs-4">
                  <tr>
                    <th>
                      <h6 className="fs-3 fw-semibold mb-0">Customer</h6>
                    </th>
                    <th>
                      <h6 className="fs-3 fw-semibold mb-0">Rating</h6>
                    </th>
                    <th>
                      <h6 className="fs-3 fw-semibold mb-0">Comment</h6>
                    </th>
                    <th>
                      <h6 className="fs-3 fw-semibold mb-0 text-end">Date</h6>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {reviews &&
                    reviews.map((review) => (
                      <>
                        <tr>
                          <td>
                            <div className="d-flex align-items-center">
                              <img
                                src={profilePng}
                                className="rounded-circle"
                                width="30"
                                height="30"
                              />
                              <div className="ms-3">
                                <h6 className="fs-4 fw-semibold mb-0 text-nowrap">
                                  {review?.name}
                                </h6>
                              </div>
                            </div>
                          </td>
                          <td style={{minWidth:'200px'}}>
                            <RatingComponent
                              rating={review.rating}
                              readOnly={true}
                            />
                          </td>
                          <td>
                            <span className="mb-0 fw-normal fs-3 mt-2">
                              {review?.comment}
                            </span>
                          </td>
                          <td>
                            <p className="mb-0 fw-normal fs-3 text-end text-nowrap">
                              {formatDate(review?.modifiedAt)}
                            </p>
                          </td>
                        </tr>
                      </>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        {/* <div className="col-lg-4 d-flex align-items-stretch">
        <div className="card shadow-none border w-100 mb-7 mb-lg-0">
          <div className="card-body p-4 d-flex flex-column justify-content-center">
            <div className="comment-widgets">
              <div className="d-flex flex-row comment-row mt-0 p-3">
                <div className="p-2">
                  <img
                    src={profilePng}
                    alt="user"
                    width="50"
                    className="rounded-circle"
                  />
                </div>
                <div className="comment-text w-100">
                  <RatingComponent {...options} />
                  <h6 className="fw-medium">{review?.name}</h6>
                  <span className="mb-3 d-block">{review.comment}</span>
                  <div className="comment-footer d-md-flex align-items-center">
                    <div className="text-muted">
                      {formatDate(review?.modifiedAt)}
                    </div>
                    <div className="action-icons ms-auto">
                      <a href="javascript:void(0)">
                        <i data-feather="edit-3" className="feather-sm"></i>
                      </a>
                      <a href="javascript:void(0)">
                        <i
                          data-feather="check-circle"
                          className="feather-sm"
                        ></i>
                      </a>
                      <a href="javascript:void(0)">
                        <i data-feather="heart" className="feather-sm"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}

        {/* <div className="reviewCard">
      <img src={profilePng} alt="User" className="rounded-circle" />
      <p>{review.name}</p>
      <RatingComponent {...options} />
      <h6>{review.comment}</h6>
    </div> */}
      </>
    );
};

export default ReviewCard;
