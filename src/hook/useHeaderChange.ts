import { useLocation } from "react-router-dom";

function useHeaderChange() {
  const location = useLocation();
  //   const navigate = useNavigate();
  //   console.log(location);
  return location.pathname === "/subscribe";
}

export default useHeaderChange;
