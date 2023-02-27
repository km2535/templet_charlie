import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import { createContext } from "react";
import { googleLogin } from "../api/login/googleLogin";
import { kakaoLog } from "../api/login/kakaoLogin";
import { naverLog } from "../api/login/naverLogin";

const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
  const [user, setUser] = useState(null);
  const [googleAccess, setGoogleAccess] = useState(null);
  const [kakaoAccess, setKakaoAccess] = useState(null);
  const [naverAccess, setNaverAccess] = useState(null);

  useEffect(() => {
    const key = window.sessionStorage.getItem("accessToken");
    key && setGoogleAccess(key);
  }, []);

  useEffect(() => {
    googleAccess && googleLogin(googleAccess, setUser);
    kakaoAccess && kakaoLog(kakaoAccess, setUser);
    naverAccess && naverLog(naverAccess, setUser);
  }, [googleAccess, kakaoAccess, naverAccess]);

  return (
    <AuthContext.Provider
      value={{ user, setUser, setKakaoAccess, setNaverAccess }}
    >
      {children}
    </AuthContext.Provider>
  );
}
export function useAuthContext() {
  return useContext(AuthContext);
}
