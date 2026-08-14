import styled from "styled-components";

export const StyledToastContainer = styled.div`
  .Toastify__toast {
    border-radius: 8px;
    font-family: "Inter", sans-serif;
    font-weight: 500;
    padding: 12px 16px;
    color: #fff;
  }

  .Toastify__toast--success {
    background: linear-gradient(90deg, #00c853, #64dd17);
  }

  .Toastify__toast--error {
    background: linear-gradient(90deg, #d50000, #ff1744);
  }

  .Toastify__toast--info {
    background: linear-gradient(90deg, #2962ff, #448aff);
  }

  .Toastify__toast--default {
    background: #424242;
  }

  .Toastify__progress-bar {
    background: rgba(255, 255, 255, 0.7);
  }
`;
