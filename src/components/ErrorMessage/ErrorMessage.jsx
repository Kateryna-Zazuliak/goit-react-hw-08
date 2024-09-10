import { useEffect } from "react";
import { Toaster, toast } from "react-hot-toast";

const ErrorMessage = ({ message }) => {
  useEffect(() => {
    toast(message, {
      style: {
        border: "1px solid #1976d2",
        padding: "16px",
        color: "#1976d2",
      },
      iconTheme: {
        primary: "#1976d2",
        secondary: "#FFFAEE",
      },
    });
  }, [message]);
  return (
    <div>
      <Toaster position="top-center" reverseOrder={true} />
    </div>
  );
};

export default ErrorMessage;
