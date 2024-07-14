import { useState } from "react";
import apiService from "../service/apiService";
import { toast } from "react-toastify";
import UploadImage from "../components/UploadImage/UploadImage";
import { useNavigate } from "react-router-dom";
import Loader from "../components/Loader/Loader";

function AddProject() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    title: "",
    description: "",
  });
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState(null);

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      const formKeys = Object.keys(data);
      formKeys.forEach((key) => {
        formData.append(key, data[key]);
      });
      formData.append("image", image);
      setLoading(true);
      const response = await apiService.postRequest("project", formData);
      if (response) {
        toast.success("Project added successfully!");
        setData({
          title: "",
          description: "",
          image: null,
        });
        setImage(null);
        navigate(-1);
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error(error);
      alert("Error adding project");
    }
  };

  return (
    <>
      <Loader visible={loading} />
      <div className="card">
        <div
          className="card-body"
          style={{
            display: "flex",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          <div>
            <h2 className="card-title fw-semibold mb-4">Add Project</h2>
            <div className="card">
              <div className="card-body">
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="title" className="form-label">
                      Title
                    </label>
                    <input
                      className="form-control"
                      type="text"
                      name="title"
                      value={data.title}
                      onChange={handleChange}
                      required
                      autoComplete="off"
                    />
                    <div id="emailHelp" className="form-text">
                      will never share your email with anyone else.
                    </div>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="title" className="form-label">
                      Description
                    </label>
                    <textarea
                      name="description"
                      value={data.description}
                      onChange={handleChange}
                      className="form-control"
                      required
                      rows={5}
                      autoComplete="off"
                    />
                  </div>
                  <div className="mb-3">
                    <div>
                      <UploadImage
                        multiple={false}
                        setImage={setImage}
                        data={data}
                      />
                    </div>
                  </div>
                  <button
                    type="button"
                    className="btn btn-outline-primary"
                    style={{ marginRight: "10px" }}
                    onClick={() => {
                      navigate(-1);
                    }}
                  >
                    Cancel
                  </button>
                  <button type="submit" className="btn btn-primary">
                    Add Project
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="container">
        <div className="contact-content">
          <h1 className="main-heading">Add Project</h1>
        </div>
        <div className="section-registration">
          <div className="main-container grid grid-two-cols">
            <div className="registration-form">
              <form onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="title">Title</label>
                  <input
                    type="text"
                    name="title"
                    value={data.title}
                    onChange={handleChange}
                    required
                    autoComplete="off"
                  />
                </div>

                <div>
                  <label htmlFor="title" className="form-label">
                    Description
                  </label>
                  <textarea
                    name="description"
                    value={data.description}
                    onChange={handleChange}
                    className="form-control"
                    required
                    cols={40}
                    rows={5}
                    style={{
                      background: "black",
                      padding: "1rem 2.6rem",
                      borderRadius: "8px",
                    }}
                    autoComplete="off"
                  />
                </div>
                <div>
                  <UploadImage
                    multiple={false}
                    setImage={setImage}
                    data={data}
                  />
                </div>

                <br />
                <button
                  type="button"
                  className="btn btn-default"
                  style={{ marginRight: "10px" }}
                  onClick={() => {
                    navigate(-1);
                  }}
                >
                  Cancel
                </button>
                <button type="submit" className="btn btn-primary">
                  Add Project
                </button>
              </form>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
}

export default AddProject;
