import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { kakaoLogin } from "../../../api/login/kakaoLogin";
import { naverLogin } from "../../../api/login/naverLogin";
import { useAuthContext } from "../../../context/AuthContextProvider";

export default function AccessLogin() {
  const { setKakaoAccess, setNaverAccess } = useAuthContext();
  const navigate = useNavigate();
  useEffect(() => {
    const parsedHash = new URLSearchParams(window.location.hash.substring(1));
    const parsedQuery = new URLSearchParams(window.location.search);
    const accessToken = parsedHash.get("access_token");
    const code = parsedQuery.get("code");
    const state = parsedQuery.get("state");
    const kakaAccess = window.sessionStorage.getItem("kakaAccess");
    const naverAccess = window.sessionStorage.getItem("naverAccess");

    kakaAccess && setKakaoAccess(kakaAccess);
    naverAccess && setNaverAccess(naverAccess);

    accessToken && window.sessionStorage.setItem("accessToken", accessToken);

    code && window.sessionStorage.setItem("code", code);

    state && window.sessionStorage.setItem("state", state);

    code &&
      !state &&
      kakaoLogin(code).then(() => {
        setKakaoAccess(window.sessionStorage.getItem("kakaAccess"));
      });

    code && state && naverLogin(code, state, setNaverAccess);
  }, [navigate, setKakaoAccess, setNaverAccess]);
  return <></>;
}
