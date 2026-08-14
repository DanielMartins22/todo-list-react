import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { StyledToastContainer } from "./styles";

function ToastContainerCustom() {
    return (
        <StyledToastContainer>
            <ToastContainer
                position="top-right"
                autoClose={750}
                hideProgressBar={false}
                newestOnTop={true}
                closeOnClick
                draggable
                pauseOnHover
                theme="colored"
            />
        </StyledToastContainer>
    )
}

export default ToastContainerCustom;
