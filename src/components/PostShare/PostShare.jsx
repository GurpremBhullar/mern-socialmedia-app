import React from "react";
import ProfileImage from "../../img/Profile.jpg";
import "./PostShare.css";
import { FaPhotoVideo } from "react-icons/fa"
import { IoMdVideocam } from "react-icons/io"
import { GoLocation } from "react-icons/go"
import { AiOutlineSchedule } from "react-icons/ai"

const PostShare = () => {
  return (
    <div className="PostShare">
      <img src={ProfileImage} alt="" />
      <div>
        <input type="text" placeholder="What's Happening" />
      <div className="postOptions">
          <div className="option"
            style={{color: "var(--photo)"}}>
              <FaPhotoVideo />
              Photo
          </div>
          <div className="option"
            style={{color: "var(--video)"}}>
             <IoMdVideocam />
             Video
          </div>
          <div className="option"
            style={{color: "var(--locaton)"}}>
             <GoLocation />
                Location
          </div>
          <div className="option"
            style={{color: "var(--schedule)"}}>
             <AiOutlineSchedule />
             Schedule
          </div>
          <button className="button ps-button">
              Share
          </button>
      </div>
    </div>
</div>
  );
};

export default PostShare;
