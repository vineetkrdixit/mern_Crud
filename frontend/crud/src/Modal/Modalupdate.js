import React, { useState } from "react";

const Modalupdate = () => {
  const [getData, setGetData] = useState({
    name: "",
    salary: "",
    Eid: "",
    dob: "",
    gender: "",
  });
  const setData = () => {};
  const handelUpdate = () => {};
  return (
    <>
      <div className=" card p-3 col-lg-6">
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Enter Name"
            name="name"
            value={getData.name}
            onChange={setData}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput2" className="form-label">
            Salary
          </label>
          <input
            type="number"
            className="form-control"
            id="exampleFormControlInput2"
            placeholder="Enter Salary"
            name="salary"
            value={getData.salary}
            onChange={setData}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput3" className="form-label">
            Employee-ID
          </label>
          <input
            type="number"
            className="form-control"
            id="exampleFormControlInput3"
            placeholder="Enter Emp-Id"
            name="Eid"
            value={getData.Eid}
            onChange={setData}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput4" className="form-label">
            DOB
          </label>
          <input
            type="date"
            className="form-control"
            id="exampleFormControlInput4"
            placeholder="Enter DOB"
            name="dob"
            value={getData.dob}
            onChange={setData}
          />
        </div>

        <label className="form-check-label" for="flexRadioDefault1">
          Gender
        </label>
        <br></br>

        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            id="flexRadioDefault1"
            name="gender"
            value="Male"
            onChange={setData}
          />
          <label className="form-check-label" htmlFor="flexRadioDefault1">
            Male
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            id="flexRadioDefault2"
            name="gender"
            value="Female"
            onChange={setData}
          />
          <label className="form-check-label" htmlFor="flexRadioDefault2">
            Female
          </label>
        </div>
        <button
          type="button"
          className="btn btn-warning"
          onClick={handelUpdate}
        >
          Update
        </button>
      </div>
    </>
  );
};

export default Modalupdate;
