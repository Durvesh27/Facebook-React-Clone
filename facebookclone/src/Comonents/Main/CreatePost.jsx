import React from 'react'
import './Post.css'
const CreatePost = () => {
  return (
    <div className='create-post'>
      <div className='create-post-box'>
      <div className='post-box1'>
        <h3 className='post-box1-text'>Create Post</h3>
        <div className="setting-box box-pos">
            <i class="fa-solid fa-xmark fa-xl"></i>
          </div>
      </div>

      <div className="post-box2">
      <div className="post-box2-1">
        <img src="https://scontent.fbom3-1.fna.fbcdn.net/v/t1.6435-1/118785637_102556721588864_5292399703149342426_n.jpg?stp=cp0_dst-jpg_s86x86&_nc_cat=108&ccb=1-7&_nc_sid=db1b99&_nc_ohc=RvJ7MnS6SwgAX_By_M8&_nc_ht=scontent.fbom3-1.fna&oh=00_AfAAuUI_TLLIUcd-gokFDG_XiPLXzeUjscboc5AvY2X_Ew&oe=650302E9" alt="" className='post-profile'/>
        <div>
       <h4>Durvesh Nakhawa</h4>
       <div className='post-box2-1flex'>
        <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yZ/r/4qsdCsLNqKi.png" alt="" />
        <h5>Friends</h5>

       </div>
        </div>
      </div>
      </div>

      </div>
    </div>
  )
}

export default CreatePost
