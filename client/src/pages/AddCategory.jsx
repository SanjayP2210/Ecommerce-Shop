import React, { useEffect, useState } from 'react'

const AddCategory = ({ setNewCategories }) => {
  const [data, setData] = useState([{ id: Date.now(), name: "" }]);
  useEffect(() => {
    setNewCategories(data);
  }, [data])

  const handleAddItem = () => {
    const updatedArray = [...data, { id: Date.now(), name: "" }];
    setData(updatedArray);
  };

  const handleRemoveItem = (id) => {
    const updatedArray = data.filter((item) => item?.id !== id);
    setData(updatedArray);
  };

const handleChange = (id, newValue) => {
    const updatedArray = data.map((item) =>
      item?.id === id ? { ...item, name: newValue } : item
    );
    setData(updatedArray);
  };

  return (
    <div>
      <div className="mt-2">
        {data?.map((item, index) => (
          <div key={item?.id} className="repeater-item">
            <div className="row mb-3">
              <div className="col-md-10 mt-3 mt-md-0">
                <input
                  type="text"
                  name="name"
                  value={item?.name}
                  className="form-control"
                  onChange={(e) => handleChange(item?.id, e.target.value)}
                />
              </div>
              <div className="col-md-2 mt-3 mt-md-0">
                {data?.length > 1 && (
                  <button
                    className="btn bg-danger-subtle text-danger"
                    type="button"
                    onClick={() => handleRemoveItem(item?.id)}
                  >
                    <i className="ti ti-x fs-5 d-flex"></i>
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
        <button
          type="button"
          className="btn bg-primary-subtle text-primary "
          onClick={handleAddItem}
        >
          <span className="fs-4 me-1">+</span>
          Add another category
        </button>
      </div>
    </div>
  );
};

export default AddCategory