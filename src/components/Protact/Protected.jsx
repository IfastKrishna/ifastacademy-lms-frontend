import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function Protected({ children, authentication }) {
  const [loading, setloading] = useState(true);
  const navigate = useNavigate();
  const authStatus = useSelector((state) => state.auth.isAuthenticated);

  useEffect(() => {
    if (authStatus && authStatus !== authentication) {
      navigate("/");
    } else if (!authStatus && authStatus !== authentication) {
      navigate("/");
    }
    setloading(false);
  }, [navigate, authStatus, authentication]);
  return loading ? <p>Loading ...</p> : <>{children}</>;
}

export default Protected;
