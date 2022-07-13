import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Modal = (props) => {
  const navigate = useNavigate();
  const deleteValue = props.deleteModal;
  const IDS = props.did;

  const deleteTask = () => {
    if (deleteValue === true) {
      axios.delete(`http://localhost:3002/delete/${IDS}`).then((res) => {
        alert("Data Deleted");
        navigate("/home");
      });
    } else {
    }
  };
  return (
    <>
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Deletion Alert
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              Are you sure you want to delete this entry
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                class="btn btn-primary"
                onClick={deleteTask}
                data-bs-dismiss="modal"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
