import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./components/errorPage/ErrorPage";
import LandingPage from "./pages/landingPage/LandingPage";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Location from "./pages/location/Location";
import Service from "./pages/service/Service";
import Notice from "./pages/notice/Notice";
import Qna from "./pages/qna/Qna";
import Admin from "./adminpage/Admin";
import AdminRoomList from "./adminpage/room/roomlist/AdminRoomList";
import AdminRoomEdit from "./adminpage/room/roomedit/AdminRoomEdit";
import Summary from "./adminpage/summary/Summary";
import AddRoom from "./adminpage/room/addroom/AddRoom";
import AdminServiceList from "./adminpage/service/servicelist/AdminServiceList";
import AddService from "./adminpage/service/addservice/AddService";
import AdminServiceEdit from "./adminpage/service/serviceedit/AdminServiceEdit";
import AdminBoardList from "./adminpage/board/boardlist/AdminBoardList";
import AddBoard from "./adminpage/board/addboard/AddBoard";
import AdminBoardEdit from "./adminpage/board/boardedit/AdminBoardEdit";
import BoardDetail from "./components/board/boardDetail/BoardDetail";
import AdminQnaList from "./adminpage/qna/qnaList/AdminQnaList";
import AddQna from "./adminpage/qna/addQna/AddQna";
import AdminQnaEdit from "./adminpage/qna/qnaEdit/AdminQnaEdit";
import QnaDetail from "./components/qna/qnaDetail/QnaDetail";
import Login from "./pages/login/Login";
import ProtectedRoute from "./pages/protectPage/ProtectedRoute";
import Logout from "./pages/logout/Logout";
import AccessLogin from "./components/login/google/AccessLogin";
import QnaList from "./pages/qna/qnaList/QnaList";
import NoticeList from "./pages/notice/noticeList/NoticeList";
import ServiceFirst from "./pages/service/ServiceFirst/ServiceFirst";
import ServiceDetail from "./pages/service/ServiceDetail/ServiceDetail";
import Room from "./pages/room/Room";
import RoomDetail from "./pages/room/roomDetail/RoomDetail";
import Personal from "./pages/policy/personal/Personal";
import Email from "./pages/policy/email/Email";
import Use from "./pages/policy/use/Use";
import Design from "./adminpage/designSkin/Design";
import MainDesign from "./adminpage/designSkin/mainDesign/MainDesign";
import SubAbout from "./adminpage/designSkin/subDesign/SubAbout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        path: "/",
        element: <LandingPage />,
      },
      {
        path: process.env.REACT_APP_API_SUB_URL,
        element: <Home />,
        children: [
          {
            index: true,
            path: process.env.REACT_APP_API_SUB_URL,
            element: <About />,
          },
          {
            path: process.env.REACT_APP_API_SUB_OPTION_ONE_URL,
            element: <Location />,
          },
          {
            path: process.env.REACT_APP_API_SUB_OPTION_TWO_URL,
            element: <Room />,
          },
          {
            path: `${process.env.REACT_APP_API_SUB_OPTION_TWO_URL}/:id`,
            element: <RoomDetail />,
          },
          {
            path: process.env.REACT_APP_API_SUB_OPTION_THREE_URL,
            element: <Service />,
            children: [
              {
                index: true,
                element: <ServiceFirst />,
              },
              {
                path: process.env.REACT_APP_API_SUB_OPTION_THREE_URL + "/:id",
                element: <ServiceDetail />,
              },
            ],
          },
          {
            path: process.env.REACT_APP_API_SUB_OPTION_FOUR_URL,
            element: <Notice />,
            children: [
              {
                index: true,
                element: <NoticeList />,
              },
              {
                path: process.env.REACT_APP_API_BOARD_DETAIL_URL + "/:id",
                element: <BoardDetail />,
              },
            ],
          },
          {
            path: process.env.REACT_APP_API_SUB_OPTION_FIVE_URL,
            element: <Qna />,
            children: [
              {
                index: true,
                element: <QnaList />,
              },
              {
                path: process.env.REACT_APP_API_ADD_QNA_URL,
                element: <AddQna />,
              },
              {
                path: `${process.env.REACT_APP_API_QNA_DETAIL_URL}`,
                element: <QnaDetail />,
              },
              {
                path:
                  process.env.REACT_APP_API_QNA_DETAIL_URL +
                  "/" +
                  process.env.REACT_APP_API_QNA_EDIT_URL +
                  "/:id",
                element: <AdminQnaEdit />,
              },
            ],
          },
          {
            path:
              process.env.REACT_APP_API_SUB_URL +
              process.env.REACT_APP_API_PERSONAL_URL,
            element: <Personal />,
          },
          {
            path:
              process.env.REACT_APP_API_SUB_URL +
              process.env.REACT_APP_API_EMAIL_URL,
            element: <Email />,
          },
          {
            path:
              process.env.REACT_APP_API_SUB_URL +
              process.env.REACT_APP_API_USE_URL,
            element: <Use />,
          },
        ],
      },
      {
        path: process.env.REACT_APP_API_LOGIN_URL,
        element: <Login />,
      },
      {
        path: process.env.REACT_APP_API_GOOGLE_REDIRECT_URL,
        element: <AccessLogin />,
      },
      {
        path: process.env.REACT_APP_API_LOGOUT_URL,
        element: <Logout />,
      },
      {
        path: process.env.REACT_APP_API_ADMIN_URL,
        element: (
          <ProtectedRoute requireAdmin>
            <Admin />
          </ProtectedRoute>
        ),
        children: [
          {
            index: true,
            path: process.env.REACT_APP_API_ADMIN_URL,
            element: <Summary />,
          },
          {
            path: process.env.REACT_APP_API_ADMIN_ROOMLIST_URL,
            element: <AdminRoomList />,
          },

          {
            path: process.env.REACT_APP_API_ADMIN_ADDROOM_URL,
            element: <AddRoom />,
          },
          {
            path: process.env.REACT_APP_API_ADMIN_ROOMEDIT_URL + "/:id",
            element: <AdminRoomEdit />,
          },
          {
            path: process.env.REACT_APP_API_ADMIN_SERVICELIST_URL,
            element: <AdminServiceList />,
          },

          {
            path: process.env.REACT_APP_API_ADMIN_ADDSERVICE_URL,
            element: <AddService />,
          },
          {
            path: process.env.REACT_APP_API_ADMIN_SERVICEDIT_URL + "/:id",
            element: <AdminServiceEdit />,
          },
          {
            path: process.env.REACT_APP_API_ADMIN_BOARDLIST_URL,
            element: <AdminBoardList />,
          },

          {
            path: process.env.REACT_APP_API_ADMIN_ADDBOARD_URL,
            element: <AddBoard />,
          },
          {
            path:
              process.env.REACT_APP_API_ADMIN_BOARDLIST_URL +
              "/" +
              process.env.REACT_APP_API_BOARD_DETAIL_URL +
              "/:id",
            //admin 여부 확인하여 경로 보호하기
            element: <BoardDetail isAdmin={true} />,
          },
          {
            path: process.env.REACT_APP_API_ADMIN_BOARDEDIT_URL + "/:id",
            element: <AdminBoardEdit />,
          },

          {
            path: process.env.REACT_APP_API_ADMIN_ADDQNA_URL,
            element: <AddQna />,
          },
          {
            path:
              process.env.REACT_APP_API_ADMIN_QNALIST_URL +
              "/" +
              process.env.REACT_APP_API_QNA_DETAIL_URL,
            //admin 여부 확인하여 경로 보호하기
            element: <QnaDetail isAdmin={true} />,
          },
          {
            path: process.env.REACT_APP_API_ADMIN_QNALIST_URL,
            element: <AdminQnaList />,
          },
          {
            path:
              process.env.REACT_APP_API_ADMIN_QNALIST_URL +
              "/" +
              process.env.REACT_APP_API_QNA_DETAIL_URL +
              "/" +
              process.env.REACT_APP_API_QNA_EDIT_URL +
              "/:id",
            element: <AdminQnaEdit />,
          },
          {
            path: process.env.REACT_APP_API_ADMIN_DESIGN_URL,
            element: <Design />,
            children: [
              {
                index: true,
                element: <MainDesign />,
              },
              {
                path: process.env.REACT_APP_API_ADMIN_DESIGN_URL + "/subAbout",
                element: <SubAbout />,
              },
            ],
          },
        ],
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
