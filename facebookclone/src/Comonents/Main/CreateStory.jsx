import React from "react";
import multi from "../../Images/multi.png";
import bell from "../../Images/bell.png";
import profile from "../../Images/profile.png";
import blue from "../../Images/blue.png";
import maroon from "../../Images/maroon.png";
import "./Story.css";
const CreateStory = () => {
  return (
    <div className="create-story">
      <div className="create-story1">
        <div className="create-story1-1">
          <div className="cross-box">
            <i class="fa-solid fa-xmark fa-xl"></i>
          </div>
          <div>
            <img
              src="https://cdn-icons-png.flaticon.com/512/5968/5968764.png"
              alt="err"
              className="fb-logo"
            />
          </div>
        </div>
        <div className="create-story1-2">
          <h2>Your story</h2>
          <div className="setting-box">
            <i class="fa-solid fa-gear fa-lg"></i>
          </div>
        </div>
        <div className="create-story1-3">
          <img
            src="https://scontent.fbom3-2.fna.fbcdn.net/v/t1.6435-1/118785637_102556721588864_5292399703149342426_n.jpg?stp=dst-jpg_s100x100&_nc_cat=108&ccb=1-7&_nc_sid=2b6aad&_nc_ohc=RvJ7MnS6SwgAX_kpyP1&_nc_ht=scontent.fbom3-2.fna&oh=00_AfCkTdNAl33Zj4us1pBa5Ql35X04ufUshFk7oHB7YCDTag&oe=650302E9"
            alt=""
            className="story-icon-img"
          />
          <h3 style={{ fontWeight: 550, fontSize: "17px" }}>Durvesh Nakhawa</h3>
        </div>
      </div>
      <div className="create-story2">
        <div className="create-story2-1">
          <img src={multi} alt="" className="create-story2-img" />
          <img src={bell} alt="" className="create-story2-img" />
          <img src={profile} alt="" className="create-story2-img" />
        </div>
        <div className="create-story2-2">
          <div className="color-box" >
            
            <div className="color-block" style={{backgroundImage:`url(${blue})`}}>
            <div className="color-block-middle">
                <div className="color-box-circle">
                <i class="fa-solid fa-images fa-lg"></i>
                </div>
                <h4 className="colour-box-text">Create a photo story</h4>
            </div>       
            </div>

            <div className="color-block" style={{backgroundImage:`url(${maroon})`}}>
            <div className="color-block-middle">
                <div className="color-box-circle">
                <span className="color-block-letter">Aa</span>
                </div>
                <h4 className="colour-box-text">Create a text story</h4>
            </div>   
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateStory;
