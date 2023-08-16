import React from "react";
import "./Profile.css";
function EditProfile() {
  return (
    <div>
    <div className="background-opacity"></div>
      <div className="edit-profile">
        <div className="edit-profile-top">
          <h3 className="fz20" style={{ textAlign: "center" }}>
            Edit profile
          </h3>
          <div className="edit-cross">
            <i class="fa-solid fa-xmark fa-xl"></i>
          </div>
        </div>
        <div className="edit-profile-content">
          <div className="edit-profile-1">
            <div className="edit-profile-1-flex">
              <h3 className="fz20">Profile picture</h3>
              <p className="blue-color">Edit</p>
            </div>
            <div className="edit-profile-setup">
              <img
                src="https://scontent.fbom65-1.fna.fbcdn.net/v/t1.6435-1/118785637_102556721588864_5292399703149342426_n.jpg?stp=dst-jpg_p240x240&_nc_cat=108&ccb=1-7&_nc_sid=7206a8&_nc_ohc=RvJ7MnS6SwgAX8hmmMr&_nc_ht=scontent.fbom65-1.fna&oh=00_AfAvi_LTsSm4iK5eQ_7RhJRksaVmR2joBy9mrWHF7URecw&oe=65045469"
                alt=""
                className="edit-profile-img"
              />
            </div>
          </div>
          <div className="edit-profile-1">
            <div className="edit-profile-1-flex">
              <h3 className="fz20">Cover photo</h3>
              <p className="blue-color">Add</p>
            </div>
            <div className="edit-profile-cover"></div>
          </div>
          <div className="edit-profile-1">
            <div className="edit-profile-1-flex">
              <h3 className="fz20">Avatar</h3>
              <p className="blue-color">Create</p>
            </div>
            <p className="avtar-sec">Only you can view this section</p>
            <div className="edit-profile-setup">
              <img
                src="https://static.xx.fbcdn.net/rsrc.php/v3/yi/r/etbZBoA4Om4.png"
                alt=""
                className="avtar-img"
              />
            </div>
            <p className="avtar-sec1">Express yourself using an avatar</p>
            <button className="create-avtar-btn">Create Avatar</button>
          </div>
          <div className="edit-profile-1-flex">
            <h3 className="fz20">Bio</h3>
            <p className="blue-color">Add</p>
          </div>
          <p className="describe-text">Describe yourself...</p>
          <div className="edit-profile-1-flex">
            <h3 className="fz20">Customize your intro</h3>
            <p className="blue-color">Edit</p>
          </div>
          <div className="edit-profile-list">
            <div className="edit-profile-listItem">
              <img
                src="https://static.xx.fbcdn.net/rsrc.php/v3/yX/r/s_ONRClAxbX.png"
                alt=""
              />
              <p>Electrical Engineer at <b>Siemens Energy</b></p>
            </div>
            <div className="edit-profile-listItem">
              <img
                src="https://static.xx.fbcdn.net/rsrc.php/v3/yG/r/H804hWf2rBh.png"
                alt=""
              />
              <p>Studied at UES Jr. College of Science</p>
            </div>
            <div className="edit-profile-listItem">
              <img
                src="https://static.xx.fbcdn.net/rsrc.php/v3/yG/r/H804hWf2rBh.png"
                alt=""
              />
              <p>Went to <b>Dronagiri High School Karanja</b></p>
            </div>
            <div className="edit-profile-listItem">
              <img
                src="https://static.xx.fbcdn.net/rsrc.php/v3/y3/r/Yifeo6sHdtL.png"
                alt=""
              />
              <p>Lives in <b>Uran</b></p>
            </div>
            <div className="edit-profile-listItem">
              <img
                src="https://static.xx.fbcdn.net/rsrc.php/v3/yK/r/dkccKhK21Su.png"
                alt=""
              />
              <p>From <b>Uran</b></p>
            </div>
            <div className="edit-profile-listItem">
              <img
                src="https://static.xx.fbcdn.net/rsrc.php/v3/yr/r/eu1ZIPJje34.png"
                alt=""
              />
              <p>Single</p>
            </div>
          </div>
          <div className="edit-profile-1-flex mtb">
            <h3 className="fz20">Hobbies</h3>
            <p className="blue-color">Add</p>
          </div>
          <div className="edit-profile-1-flex mtb">
            <h3 className="fz20">Features</h3>
            <p className="blue-color">Add</p>
          </div>
          <div className="feature-img" >
          <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yM/r/Ql43NN0QN4C.png" alt="" />
          </div>
          <p className="avtar-sec1">Feature your favorite photos and stories here for all your friends to see.</p>
          <button className="editAbout-btn">Edit your About info</button>
        </div>
      </div>
    </div>
  );
}

export default EditProfile;
