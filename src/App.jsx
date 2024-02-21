import { SideBar } from "./components";
import { useEffect } from "react";
import { Toaster } from "react-hot-toast";
import { setUser } from "./features/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Axios from "./utils/BaseUrl";

function App() {
  const { isAuthenticated } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!isAuthenticated) {
      Axios.get("/users/current-user")
        .then((res) => {
          dispatch(setUser(res.data.data));
        })
        .catch((err) => {
          navigate("/login");
        });
    }
  }, []);
  return (
    <>
      <SideBar />
      <Toaster />
    </>
  );
}

export default App;
