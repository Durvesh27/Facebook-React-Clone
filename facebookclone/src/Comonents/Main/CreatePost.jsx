import React from "react";
import "./Post.css";
import smile from '../../Images/smile.png'
import dot3 from '../../Images/3dot.png'
const CreatePost = ({showPost,setShowPost}) => {
  return (
    <>
    <div className="background-opacity"></div>
    <div className="create-post">
      <div className="create-post-box">
        <div className="post-box1">
          <h3 className="post-box1-text">Create Post</h3>
          <div className="setting-box box-pos">
            <i class="fa-solid fa-xmark fa-xl" onClick={()=>setShowPost(!showPost)}></i>
          </div>
        </div>

        <div className="post-box2">
          <div className="post-box2-1">
            <img
              src="https://scontent.fbom3-1.fna.fbcdn.net/v/t1.6435-1/118785637_102556721588864_5292399703149342426_n.jpg?stp=cp0_dst-jpg_s86x86&_nc_cat=108&ccb=1-7&_nc_sid=db1b99&_nc_ohc=RvJ7MnS6SwgAX_By_M8&_nc_ht=scontent.fbom3-1.fna&oh=00_AfAAuUI_TLLIUcd-gokFDG_XiPLXzeUjscboc5AvY2X_Ew&oe=650302E9"
              alt=""
              className="post-profile"
            />
            <div>
              <h4>Durvesh Nakhawa</h4>
              <div className="post-box2-1flex">
                <img
                  src="https://static.xx.fbcdn.net/rsrc.php/v3/yZ/r/4qsdCsLNqKi.png"
                  alt=""
                  className="post-box-people"
                />
                <h5 className="post-box-friends">Friends</h5>
                <i class="fa-solid fa-sort-down fa-xs angle-margin"></i>
              </div>
            </div>
          </div>

          <textarea
            placeholder="What's on your mind, Durvesh?"
            className="textarea"
          ></textarea>

          <div className="post-box2-2">
            <img src="https://www.facebook.com/images/composer/SATP_Aa_square-2x.png" alt="" className="multi-color"/>
            <img src={smile} alt="" className="smile-icon"/>
          </div>

          <div className="post-box2-3">
          <h4 className="add-urpost-text">Add to your post</h4>
          <div className="post-box2-3-images">
            <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yC/r/a6OjkIIE-R0.png" alt="" />
            <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yC/r/MqTJr_DM3Jg.png" alt="" />
            <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yk/r/yMDS19UDsWe.png" alt="" />
            <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yy/r/uywzfiZad5N.png" alt="" />
            <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yX/r/j0Jp-GpONWx.png" alt="" />
            <img src={dot3} alt="" />
          </div>
          </div>

          <button className="post-box2-4">
          Post
          </button>
        </div>
      </div>
    </div>
    </>
  );
};

export default CreatePost;
