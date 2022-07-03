import React, { useState, useRef } from "react";
import ProfileImage from "../../img/Profile.jpg";
import "./PostShare.css";
import { FaPhotoVideo } from "react-icons/fa";
import { IoMdVideocam } from "react-icons/io";
import { GoLocation } from "react-icons/go";
import { AiOutlineSchedule } from "react-icons/ai";
import { FaTimes } from "react-icons/fa";

const PostShare = () => {
  const [image, setImage] = useState(null);
  const imageRef = useRef();

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      setImage({
        image: URL.createObjectURL(img),
      });
    }
  };
  return (
    <div className="PostShare">
      <img src={ProfileImage} alt="" />
      <div>
        <input type="text" placeholder="What's Happening" />
        <div className="postOptions">
          <div className="option" style={{ color: "var(--photo)" }}
            onClick={()=>imageRef.current.click()}
          >
            <FaPhotoVideo />
            Photo
          </div>
          <div className="option" style={{ color: "var(--video)" }}>
            <IoMdVideocam />
            Video
          </div>
          <div className="option" style={{ color: "var(--locaton)" }}>
            <GoLocation />
            Location
          </div>
          <div className="option" style={{ color: "var(--schedule)" }}>
            <AiOutlineSchedule />
            Schedule
          </div>
          <button className="button ps-button">Share</button>
          <div style={{ display: "none" }}>
            <input
              type="file"
              name="myImage"
              ref={imageRef}
              onChange={onImageChange}
            />
          </div>
        </div>
        {image && (
            <div className="previewImage">
              <FaTimes onClick={()=>setImage(null)}/>
              <img src={image.image} alt="" />
            </div>
          )}
      </div>
    </div>
  );
};

export default PostShare;
