import { useDispatch, useSelector } from "react-redux";
import { setShow } from "../store/toastShowSlice";
import Toast from "react-bootstrap/Toast";
import ToastContainer from "react-bootstrap/ToastContainer";
import "./ToastAlert.css";

function ToastAlert() {
  const dispatch = useDispatch();
  const show = useSelector((state) => state.toastShow.show);
  const message = useSelector((state) => state.toastMessage.message);

  function handleClose() {
    dispatch(setShow(false));
  }

  return (
    <ToastContainer position="bottom-end" className="m-3 position-fixed">
      <Toast show={show} onClose={handleClose} autohide>
        <Toast.Header className="fs-3" id="toast-header">
          <img
            src={require("../images/pawsitive_outcome_logo.png")}
            className="rounded me-2"
            alt=""
            id="logo"
          />
          <strong className="me-auto">Pawsitive Outcome</strong>
        </Toast.Header>
        <Toast.Body className="fs-4">{message}</Toast.Body>
        <div className="bar">
          <div className="in"></div>
        </div>
      </Toast>
    </ToastContainer>
  );
}
export default ToastAlert;
