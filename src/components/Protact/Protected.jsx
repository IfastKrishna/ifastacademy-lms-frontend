import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function Protected({ children }) {
  const [isLoading, setIsLoading] = useState(true);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuthentication = async () => {
      try {
        if (!isAuthenticated) {
          navigate("/");
        }
      } catch (error) {
        console.error("Error while checking authentication:", error);
      } finally {
        setIsLoading(false);
      }
    };

    checkAuthentication();
  }, [isAuthenticated, navigate]);

  return isLoading ? null : <>{children}</>;
}

export default Protected;
