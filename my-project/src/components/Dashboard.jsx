import { useLocation } from "react-router-dom";
const DashBoard = () => {
  const location = useLocation();
  return (
    <>
      <p>{location.state.name}</p>
    </>
  );
};
export default DashBoard;
