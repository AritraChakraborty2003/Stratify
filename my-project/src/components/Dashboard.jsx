import { useLocation, useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";
const DashBoard = () => {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <>
      {(localStorage.getItem("admin") == "#12356" && (
        <>
          <button
            className="bg-blue1 text-white p-2"
            onClick={() => {
              navigate("/login");
              localStorage.removeItem("admin");
            }}
          >
            Logout
          </button>
          <p>{location.state.name}</p>
        </>
      )) || <Navigate to="/login" />}
    </>
  );
};
export default DashBoard;
