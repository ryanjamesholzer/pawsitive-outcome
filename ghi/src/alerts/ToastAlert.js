import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer'; 

function ToastAlert({activeToastAlert, setActiveToastAlert, message}) {

    function handleClose() {
        setActiveToastAlert(false)
    }

    return(
        <ToastContainer position="bottom-end">
            <Toast show={activeToastAlert} onClose={handleClose}>
                <Toast.Header>
                    <img src="ghi/public/dog.png" className="rounded me-2" alt="" />
                    <strong className="me-auto">Pawsitive Outcome</strong>
                </Toast.Header>
                <Toast.Body>{message}</Toast.Body>
            </Toast>
        </ToastContainer>
    )
}
export default ToastAlert
