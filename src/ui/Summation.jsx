import React, { useState } from "react";
import { FaBath, FaBed } from "react-icons/fa";
import { BsFillPeopleFill, BsImageFill } from "react-icons/bs";
import { SlSizeFullscreen } from "react-icons/sl";
import { IoLocationSharp, IoTime } from "react-icons/io5";
import { MdMiscellaneousServices } from "react-icons/md";
import { useEffect } from "react";
export default function Summation({ Icon, description }) {
  const [type, setType] = useState("");
  const [desc, setDesc] = useState("");
  useEffect(() => {
    switch (Icon) {
      case "FaBath":
        setType(<FaBath />);
        setDesc("욕조타입");
        break;
      case "FaBed":
        setType(<FaBed />);
        setDesc("침실타입");
        break;
      case "BsFillPeopleFill":
        setType(<BsFillPeopleFill />);
        setDesc("인원");
        break;
      case "BsImageFill":
        setType(<BsImageFill />);
        setDesc("전망");
        break;
      case "SlSizeFullscreen":
        setType(<SlSizeFullscreen />);
        setDesc("면적");
        break;
      case "IoLocationSharp":
        setType(<IoLocationSharp />);
        setDesc("위치");
        break;
      case "IoTime":
        setType(<IoTime />);
        setDesc("체크인/체크아웃");
        break;
      case "MdMiscellaneousServices":
        setType(<MdMiscellaneousServices />);
        setDesc("기타");
        break;

      default:
        break;
    }
  }, [Icon]);
  return (
    <>
      {type}
      &nbsp;
      {desc}
      {description && ": " + description}
    </>
  );
}
