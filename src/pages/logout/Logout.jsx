import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContextProvider";

export default function Logout() {
  const { setUser } = useAuthContext();
  const navigate = useNavigate();
  useEffect(() => {
    const accessToken = window.sessionStorage.getItem("accessToken");
    const code = window.sessionStorage.getItem("code");
    const state = window.sessionStorage.getItem("state");
    const kakaAccess = window.sessionStorage.getItem("kakaAccess");
    const naverAccess = window.sessionStorage.getItem("naverAccess");
    accessToken && window.sessionStorage.removeItem("accessToken");
    code && window.sessionStorage.removeItem("code");
    state && window.sessionStorage.removeItem("state");
    kakaAccess && window.sessionStorage.removeItem("kakaAccess");
    naverAccess && window.sessionStorage.removeItem("naverAccess");
    setUser(null);
    navigate("/", { replace: true });
  }, [navigate, setUser]);
  return <></>;
}
