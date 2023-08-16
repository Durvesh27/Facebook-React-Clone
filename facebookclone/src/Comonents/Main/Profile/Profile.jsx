import React from "react";
import Navbar from "../../Home/Navbar";
import "./Profile.css";
const Profile = () => {
  return (
    <div >
      <Navbar />
      <div className="user-profile-main">
      <div className="user-profile">
        <div className="profile-grey-box">
          <span className="profile-top-box">
            <i class="fa-solid fa-face-smile-wink profile-top-box-icon"></i>
            <span>Create with avtar</span>
          </span>
          <span
            className="profile-top-box"
            style={{ top: "362px", right: "30px" }}
          >
            <i class="fa-solid fa-camera profile-top-box-icon"></i>
            <span>Add cover photo</span>
          </span>
        </div>

        <div className="user-profile-content">
          <div className="profile-details">
            <div className="profile-details-flex">
              <h1 style={{marginTop:"20px"}}>Durvesh Nakhawa</h1>
              <p className="friends-count">152 Friends</p>
              <div className="circle-images">
                <div>
                  <img
                    src="https://scontent.fbom65-1.fna.fbcdn.net/v/t39.30808-1/333721838_260790699605035_5077531714358040881_n.jpg?stp=cp0_dst-jpg_p48x48&_nc_cat=104&ccb=1-7&_nc_sid=7206a8&_nc_ohc=C6-1eh8g45QAX8LgPw8&_nc_ht=scontent.fbom65-1.fna&oh=00_AfDPT1GRkjvklpoFRLYvZaVAx5L74dE_F_B9MU0EpLVJEg&oe=64E1B652"
                    alt=""
                  />
                  <img
                    src="https://scontent.fbom65-1.fna.fbcdn.net/v/t39.30808-1/354552619_3514129838854795_5045059484895496156_n.jpg?stp=c0.0.48.48a_cp0_dst-jpg_p48x48&_nc_cat=106&ccb=1-7&_nc_sid=7206a8&_nc_ohc=MdxTU_xcIJAAX8Az6NL&_nc_ht=scontent.fbom65-1.fna&oh=00_AfCjBoOsbmw5HCIvcwUWIiWy_8kRSTGfh1uQQPGtOf5IdA&oe=64E1C638"
                    alt=""
                  />
                  <img
                    src="https://scontent.fbom65-1.fna.fbcdn.net/v/t39.30808-1/329726982_1199099560710933_6155521113669465043_n.jpg?stp=cp0_dst-jpg_p48x48&_nc_cat=104&ccb=1-7&_nc_sid=7206a8&_nc_ohc=PU9cMMB49mAAX9VNMAI&_nc_ht=scontent.fbom65-1.fna&oh=00_AfC5BRBUYlVNFqQDq1UjYQBdagbLlMy38keCxC1OsdAoxQ&oe=64E0EE7B"
                    alt=""
                  />
                  <img
                    src="https://scontent.fbom65-1.fna.fbcdn.net/v/t1.6435-1/66787682_112263203416216_7678331743383846912_n.jpg?stp=cp0_dst-jpg_p48x48&_nc_cat=108&ccb=1-7&_nc_sid=7206a8&_nc_ohc=ie4zCy65lUwAX9JQZXu&_nc_ht=scontent.fbom65-1.fna&oh=00_AfArm2n3s0h5U7af2JLmvdWYQzhvmOuxGGftdxjAZ-Fe3Q&oe=6504241F"
                    alt=""
                  />
                  <img
                    src="https://scontent.fbom65-1.fna.fbcdn.net/v/t1.6435-1/132798108_1039291459886046_8333788954944773512_n.jpg?stp=cp0_dst-jpg_p48x48&_nc_cat=104&ccb=1-7&_nc_sid=7206a8&_nc_ohc=KIy5P5diKz0AX--Fx6x&_nc_oc=AQmM2eclTl9VmlFLZvLhhegN6n1BdCVuGWP_r3eKUIBYqQgMiYKIXvm93UgTKQD1AMd2icNBspavXHawZgVhO2nC&_nc_ht=scontent.fbom65-1.fna&oh=00_AfAEytB_T6Ioi1GwOnVyYUM-i_Ui5KQMcfNb_1jBa9aEug&oe=650405DB"
                    alt=""
                  />
                  <img
                    src="https://scontent.fbom65-1.fna.fbcdn.net/v/t1.6435-1/87401669_800943217074368_1685287326625824768_n.jpg?stp=cp0_dst-jpg_p48x48&_nc_cat=111&ccb=1-7&_nc_sid=7206a8&_nc_ohc=YsnlvpHu628AX9N7XZ4&_nc_ht=scontent.fbom65-1.fna&oh=00_AfBLr6UiWVnNdCYD8H7VRu10OM80N416EiEHzc38eNfKtA&oe=65040B57"
                    alt=""
                  />
                </div>
                <div className="flex">
                  <button className="profile-buttons profile-btn1">
                    <i
                      class="fa-solid fa-plus"
                      style={{ marginRight: "7px" }}
                    ></i>
                    <span>Add to Story</span>
                  </button>
                  <button className="profile-buttons profile-btn2">
                    <i
                      class="fa-solid fa-pen"
                      style={{ marginRight: "7px" }}
                    ></i>
                    <span>Edit Profile</span>
                  </button>
                  <span
                    className="profile-buttons angle-down-box"
                    style={{ backgroundColor: "#D8DADF" }}
                  >
                    <i class="fa-solid fa-angle-down"></i>
                  </span>
                </div>
              </div>
            </div>
            <div className="user-image">
              <img
                src="https://scontent.fbom65-1.fna.fbcdn.net/v/t1.6435-1/118785637_102556721588864_5292399703149342426_n.jpg?stp=dst-jpg_s320x320&_nc_cat=108&ccb=1-7&_nc_sid=7206a8&_nc_ohc=RvJ7MnS6SwgAX8hmmMr&_nc_ht=scontent.fbom65-1.fna&oh=00_AfAObSan25IOKwmr1f6rAhcHpsXue6VlE2TGdMt_oyMYuw&oe=65041C29"
                alt=""
              />
              <span className="camera-box">
              <i class="fa-solid fa-camera"></i>
              </span>
            </div>
          </div>
          <div className="profile-bottom">
          <div className="profile-bottom-flex">
            <p className="profile-bottom-flex-text">Posts</p>
            <p className="profile-bottom-flex-text">About</p>
            <p className="profile-bottom-flex-text">Friends</p>
            <p className="profile-bottom-flex-text">Photos</p>
            <p className="profile-bottom-flex-text">Videos</p>
            <p className="profile-bottom-flex-text">Checkins</p>
            <p className="profile-bottom-flex-text">More</p>
          </div>
          <span className="profile-3dot" >
            ...
          </span>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Profile;
