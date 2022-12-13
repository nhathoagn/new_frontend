import React  from "react";
import {Link} from "react-router-dom";
import "./profileCard.css"
const ProfileCard = ({location}) => {
  return (
    <div className="ProfileCard">
      <div className="ProfileImages">
        <img  alt="CoverImage"/>
          <img  alt="ProfileImage"/>
      </div>
        <div className="ProfileName">
            <span></span>
            <span></span>
        </div>
        <div className="followStatus">
            <hr/>
            <div>
                <div className="follow">
                    <span>3</span>
                    <span>Followers</span>
                </div>
                <div className="v1"></div>
                <div className="follow">
                    <span>{3}</span>
                    <span>Following</span>
                </div>
                {
                    location === "profilePage" && (
                        <>
                            <div className="v1"></div>
                            <div className="follow">
                                <span>
                                    3
                                </span>
                                <span>Posts</span>
                            </div>
                        </>
                    )
                }
            </div>
            <hr/>
        </div>
        {
            location === "profilePage" ? ("") : (
                <span>
                    <Link  style={{textDecoration: "none", color: "inherit"}} > My Profile</Link>
                </span>
            )
        }
    </div>
  );
};
export default  ProfileCard