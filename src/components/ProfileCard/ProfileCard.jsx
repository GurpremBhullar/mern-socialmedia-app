import React from "react";
import Profile from '../../img/Profile.jpg'
import Cover from '../../img/CoverFive.jpg'
import './ProfileCard.css';

const ProfileCard = () => {
  return (
      <div className="ProfileCard">
          <div className="ProfileImages">
              <img src={Cover} alt=" " />
              <img src={Profile} alt=" " />
          </div>

    <div className="ProfileName">
        <span>Coder One</span>
        <span>Just A Coder</span>
    </div>

    <div className="followStatus">
        <hr />
        <div>
            <div className="follow">
                <span>6,870</span>
                <span>Followings</span>
            </div>
           <div className="vl"></div>
            <div className="follow">
                <span>100</span>
                <span>Followers</span>
            </div>
        </div>
        <hr />
    </div>

    <span>
        My Profile
    </span>
</div>
  )
}

export default ProfileCard;
