import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenSquare } from "@fortawesome/free-solid-svg-icons";
import { faTrashCanArrowUp } from "@fortawesome/free-solid-svg-icons";
import "../Home/Home.css";
import axios from "axios";
import Modal from "../Modal/Modal";

const Home = () => {
  const [addDetails, setAddDetails] = useState({
    name: "",
    salary: "",
    Eid: "",
    dob: "",
    gender: "",
  });
  const [deleteData, setDeleteData] = useState([]);

  const [getdetail, setGetDetails] = useState([]);

  const handelChange = (e) => {
    const { name, value } = e.target;
    setAddDetails({
      ...addDetails,
      [name]: value,
    });
    console.log("add", addDetails);
  };

  const handelClick = (e) => {
    e.preventDefault();
    if (
      !addDetails.name &&
      !addDetails.salary &&
      !addDetails.Eid &&
      !addDetails.dob &&
      !addDetails.gender
    ) {
      alert("Please Fill all the details");
    } else {
      axios
        .post("http://localhost:3001/adddetail", addDetails)
        .then((res) => {
          alert(res.data.message);
        })
        .catch((err) => {
          alert("Details not sent to server");
        });
    }
  };

  const deleteDetail = () => {
    {
      <Modal />;
    }
    // axios.delete("http://localhost:3001/delete").then((res) => {});
  };
  const updateDetail = () => {
    console.log("Updated");
  };

  const renderDetails = () => {
    axios.get("http://localhost:3001/getdetail").then((res) => {
      console.log("Res", res);
      setGetDetails(res.data);
    });
  };
  useEffect(() => {
    renderDetails();
  }, [getdetail]);
  console.log("getdetails", getdetail);

  return (
    <>
      <div className="container-fluid">
        <div className="d-flex">
          <div className=" card p-3 col-lg-6">
            <div className="mb-3">
              <label for="exampleFormControlInput1" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Enter Name"
                name="name"
                value={addDetails.name}
                onChange={handelChange}
              />
            </div>
            <div className="mb-3">
              <label for="exampleFormControlInput2" className="form-label">
                Salary
              </label>
              <input
                type="number"
                className="form-control"
                id="exampleFormControlInput2"
                placeholder="Enter Salary"
                name="salary"
                value={addDetails.salary}
                onChange={handelChange}
              />
            </div>
            <div className="mb-3">
              <label for="exampleFormControlInput3" className="form-label">
                Employee-ID
              </label>
              <input
                type="number"
                className="form-control"
                id="exampleFormControlInput3"
                placeholder="Enter Emp-Id"
                name="Eid"
                value={addDetails.Eid}
                onChange={handelChange}
              />
            </div>
            <div className="mb-3">
              <label for="exampleFormControlInput4" className="form-label">
                DOB
              </label>
              <input
                type="date"
                className="form-control"
                id="exampleFormControlInput4"
                placeholder="Enter DOB"
                name="dob"
                value={addDetails.dob}
                onChange={handelChange}
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
                onChange={handelChange}
              />
              <label className="form-check-label" for="flexRadioDefault1">
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
                onChange={handelChange}
              />
              <label className="form-check-label" for="flexRadioDefault2">
                Female
              </label>
            </div>
            <button
              type="button"
              className="btn btn-warning"
              onClick={handelClick}
            >
              Add Detail
            </button>
          </div>

          <div className="table-costomise card p-3">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">S.no</th>
                  <th scope="col">Name</th>
                  <th scope="col">Salary</th>
                  <th scope="col">Employee-ID</th>
                  <th scope="col">DOb</th>
                  <th scope="col">Gender</th>
                </tr>
              </thead>
              <tbody>
                {getdetail.map((items, index) => {
                  return (
                    <tr key={index}>
                      <th scope="row">{index + 1}</th>
                      <td>{items.name}</td>
                      <td>{items.salary}</td>
                      <td>{items.Eid}</td>
                      <td>{items.dob}</td>
                      <td>{items.gender}</td>
                      <span className="span-icons">
                        <FontAwesomeIcon
                          icon={faPenSquare}
                          onClick={updateDetail}
                        />
                      </span>
                      <span className="span-icons">
                        <FontAwesomeIcon
                          icon={faTrashCanArrowUp}
                          onClick={deleteDetail}
                          data-bs-toggle="modal"
                          data-bs-target="#exampleModal"
                        />
                      </span>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
