import React from "react";
import { Navigate } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContextProvider";

export default function ProtectedRoute({ children, requireAdmin }) {
  const { user } = useAuthContext();
  // 어드민이 필요한 요청에 어드민이 없다면 홈으로 돌려보냄
  //어드민이 필요하지 않는 요청은 유저가 없다면 홈으로 돌려보냄
  if (!user || (requireAdmin && !user.IsAdmin)) {
    return <Navigate to={"/"} replace />;
  }

  return children;
}
