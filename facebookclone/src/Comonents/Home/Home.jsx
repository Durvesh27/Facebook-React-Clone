import React from "react";
import "./Home.css";
import friends from "../../Images/friends.png";
import memories from "../../Images/memories.png";
import saved from "../../Images/saved.png";
import groups from "../../Images/groups.png";
import market from "../../Images/market.png";
import video from "../../Images/video.png";
import feeds from "../../Images/feeds.png";
import events from "../../Images/events.png";
import crisis from "../../Images/crisis.png";
import ads from "../../Images/ads.png";
import messenger from "../../Images/messanger.png";
import kidsmessenger from "../../Images/kids-mess.png";
import comment from "../../Images/comment.png";
import share from "../../Images/forward.png";
import like from "../../Images/like.png";

import Navbar from "./Navbar";
const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="home">
        <div className="home1">
          <div className="home1-content">
            <div className="home1-item">
              <img
                src="https://scontent.fbom65-1.fna.fbcdn.net/v/t1.6435-1/118785637_102556721588864_5292399703149342426_n.jpg?stp=dst-jpg_s100x100&_nc_cat=108&ccb=1-7&_nc_sid=2b6aad&_nc_ohc=RnXXmI1IfhUAX9rL2dR&_nc_ht=scontent.fbom65-1.fna&oh=00_AfDx1jBcF7d-YlDEJ37h23fI9-19EibrKzPKHmPyqSWK-Q&oe=65017929"
                alt=""
              />
              <h4 className="fz-15px">Durvesh Nakhawa</h4>
            </div>

            <div className="home1-item">
              <img src={friends} alt="" />
              <h4 className="fz-15px">Friends</h4>
            </div>

            <div className="home1-item">
              <img src={memories} alt="" />
              <h4 className="fz-15px">Memories</h4>
            </div>

            <div className="home1-item">
              <img src={saved} alt="" />
              <h4 className="fz-15px">Saved</h4>
            </div>
            <div className="home1-item">
              <img src={groups} alt="" />
              <h4 className="fz-15px">Groups</h4>
            </div>
            <div className="home1-item">
              <img src={video} alt="" />
              <h4 className="fz-15px">Video</h4>
            </div>
            <div className="home1-item">
              <img src={market} alt="" />
              <h4 className="fz-15px">Marketplace</h4>
            </div>
            <div className="home1-item">
              <img src={feeds} alt="" />
              <h4 className="fz-15px">Feeds</h4>
            </div>
            <div className="home1-item">
              <img src={events} alt="" />
              <h4 className="fz-15px">Events</h4>
            </div>
            <div className="home1-item">
              <img src={ads} alt="" />
              <h4 className="fz-15px">Ads Manager</h4>
            </div>
            <div className="home1-item">
              <img src={crisis} alt="" />
              <h4 className="fz-15px">Crisis response</h4>
            </div>
            <div className="home1-item">
              <img src={messenger} alt="" />
              <h4 className="fz-15px">Messenger</h4>
            </div>
            <div className="home1-item">
              <img src={kidsmessenger} alt="" />
              <h4 className="fz-15px">Kids Messenger</h4>
            </div>
            <p style={{ fontSize: "13px", margin: "10px 0" }}>
              Privacy · Terms · Advertising · Ad Choices · Cookies <br /> Meta ©
              2023
            </p>
          </div>
        </div>
        <div className="home2">
          <div className="home2-section">
            <div className="home-2-sec1">
              <div className="home21">
                <img
                  src="https://scontent.fbom65-1.fna.fbcdn.net/v/t1.6435-1/118785637_102556721588864_5292399703149342426_n.jpg?stp=cp0_dst-jpg_p60x60&_nc_cat=108&ccb=1-7&_nc_sid=2b6aad&_nc_ohc=RnXXmI1IfhUAX9rL2dR&_nc_ht=scontent.fbom65-1.fna&oh=00_AfD_o7F9o5rlejQnPv8hG5_3xitGxlOXKwXjOrYRRv3L0A&oe=6501B169"
                  alt=""
                />
                <input
                  type="text"
                  placeholder="What's on your mind, Durvesh? "
                  className="home21-ip"
                />
              </div>
              <div className="home22">
                <div className="home22-item">
                  <img
                    src="https://static.xx.fbcdn.net/rsrc.php/v3/yF/r/v1iF2605Cb5.png"
                    alt=""
                  />
                  <p className="home22-text">Live Video</p>
                </div>
                <div className="home22-item">
                  <img
                    src="https://static.xx.fbcdn.net/rsrc.php/v3/yC/r/a6OjkIIE-R0.png"
                    alt=""
                  />
                  <p className="home22-text">Photo / Video</p>
                </div>
                <div className="home22-item">
                  <img
                    src="https://static.xx.fbcdn.net/rsrc.php/v3/yk/r/yMDS19UDsWe.png"
                    alt=""
                  />
                  <p className="home22-text">Feeling / activity</p>
                </div>
              </div>
            </div>
            <div className="home-2-sec1">
              <div className="home23">
                <div className="home23-flex">
                  <img
                    src="https://scontent.fbom3-1.fna.fbcdn.net/v/t39.30808-1/329176604_754461479585083_8818468790590222951_n.jpg?stp=cp0_dst-jpg_p60x60&_nc_cat=1&ccb=1-7&_nc_sid=c7e18e&_nc_ohc=tViDFDphXrMAX-SPLZB&_nc_ht=scontent.fbom3-1.fna&oh=00_AfAblhbBFQYFpU1YYQi1-fSQ709WQIwktO_Ak5XDtrBESw&oe=64DEE075"
                    alt=""
                    className="home23-icon-img"
                  />
                  <div>
                    <p className="home23-title">diet fitness</p>
                    <p style={{ fontSize: "15px" }}>3d</p>
                  </div>
                  <i class="fa-solid fa-xmark fa-xl home-cross"></i>
                </div>
                <p style={{ fontSize: "15px", color: "#1877F2" }}>
                  #diet#fitness
                </p>
                <img
                  src="https://scontent.fbom3-1.fna.fbcdn.net/v/t39.30808-6/366358646_230116093343641_7002359899050280857_n.jpg?stp=dst-jpg_p843x403&_nc_cat=1&ccb=1-7&_nc_sid=7f8c78&_nc_ohc=hqx9PPH7nvQAX9q8E1B&_nc_ht=scontent.fbom3-1.fna&oh=00_AfACsjLlMsGgx2Dsn43tzub0MjrjL58brbL8UcNAa3HfLw&oe=64DF3054"
                  alt=""
                  className="home23-img"
                />
                <div className="home23-bottom1">
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <img
                      src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 16 16'%3e%3cdefs%3e%3clinearGradient id='a' x1='50%25' x2='50%25' y1='0%25' y2='100%25'%3e%3cstop offset='0%25' stop-color='%2318AFFF'/%3e%3cstop offset='100%25' stop-color='%230062DF'/%3e%3c/linearGradient%3e%3cfilter id='c' width='118.8%25' height='118.8%25' x='-9.4%25' y='-9.4%25' filterUnits='objectBoundingBox'%3e%3cfeGaussianBlur in='SourceAlpha' result='shadowBlurInner1' stdDeviation='1'/%3e%3cfeOffset dy='-1' in='shadowBlurInner1' result='shadowOffsetInner1'/%3e%3cfeComposite in='shadowOffsetInner1' in2='SourceAlpha' k2='-1' k3='1' operator='arithmetic' result='shadowInnerInner1'/%3e%3cfeColorMatrix in='shadowInnerInner1' values='0 0 0 0 0 0 0 0 0 0.299356041 0 0 0 0 0.681187726 0 0 0 0.3495684 0'/%3e%3c/filter%3e%3cpath id='b' d='M8 0a8 8 0 00-8 8 8 8 0 1016 0 8 8 0 00-8-8z'/%3e%3c/defs%3e%3cg fill='none'%3e%3cuse fill='url(%23a)' xlink:href='%23b'/%3e%3cuse fill='black' filter='url(%23c)' xlink:href='%23b'/%3e%3cpath fill='white' d='M12.162 7.338c.176.123.338.245.338.674 0 .43-.229.604-.474.725a.73.73 0 01.089.546c-.077.344-.392.611-.672.69.121.194.159.385.015.62-.185.295-.346.407-1.058.407H7.5c-.988 0-1.5-.546-1.5-1V7.665c0-1.23 1.467-2.275 1.467-3.13L7.361 3.47c-.005-.065.008-.224.058-.27.08-.079.301-.2.635-.2.218 0 .363.041.534.123.581.277.732.978.732 1.542 0 .271-.414 1.083-.47 1.364 0 0 .867-.192 1.879-.199 1.061-.006 1.749.19 1.749.842 0 .261-.219.523-.316.666zM3.6 7h.8a.6.6 0 01.6.6v3.8a.6.6 0 01-.6.6h-.8a.6.6 0 01-.6-.6V7.6a.6.6 0 01.6-.6z'/%3e%3c/g%3e%3c/svg%3e"
                      alt=""
                      className="like-icon"
                    />
                    <span style={{ marginLeft: "5px" }}>151K</span>
                  </div>
                  <div style={{ display: "flex" }}>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        marginRight: "12px",
                      }}
                    >
                      <span>884</span>
                      <img src={comment} alt="" className="small-icon" />
                    </div>
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <span>2.1K</span>
                      <img src={share} className="small-icon" />
                    </div>
                  </div>
                </div>
                <div className="home23-bottom2">
                  <div className="home23-bottom2-item">
                    <img src={like} alt="" className="appr-icon"/>
                    <span>Like</span>
                  </div>
                  <div className="home23-bottom2-item">
                    <img src={comment} alt="" className="appr-icon"/>
                    <span>Comment</span>
                  </div>
                  <div className="home23-bottom2-item">
                    <img src={share} alt="" className="appr-icon"/>
                    <span>Share</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="home-2-sec1">
              <div className="home23">
                <div className="home23-flex">
                  <img
                    src="https://scontent.fbom3-2.fna.fbcdn.net/v/t39.30808-1/367099556_591000156576822_2544031301316781349_n.jpg?stp=cp0_dst-jpg_p60x60&_nc_cat=1&ccb=1-7&_nc_sid=c7e18e&_nc_ohc=EfqNb9PM0LkAX8GyMkh&_nc_ht=scontent.fbom3-2.fna&oh=00_AfCCGPlosE33seLzrFuhyUV-vFywVGBHRjA1uDHUc8ZzRg&oe=64DF8A98"
                    alt=""
                    className="home23-icon-img"
                  />
                  <div>
                    <p className="home23-title">India Travel Tourism</p>
                    <p style={{ fontSize: "15px" }}>3d</p>
                  </div>
                  <i class="fa-solid fa-xmark fa-xl home-cross"></i>
                </div>
                <p style={{ fontSize: "15px", color: "#1877F2" }}>
                  #uttrakhandtourism
                </p>
                <img
                  src="https://scontent.fbom3-2.fna.fbcdn.net/v/t39.30808-6/366930859_590371466639691_5328562324590056452_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=dd63ad&_nc_ohc=zcc8MWVFxsYAX8nTNFn&_nc_ht=scontent.fbom3-2.fna&oh=00_AfBRRVW0kGfw-8ZDzWnpr9k_KAooe1lHr6ZcbW2wcfSMcA&oe=64DF59F2"
                  alt=""
                  className="home23-img"
                />
                <div className="home23-bottom1">
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <img
                      src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 16 16'%3e%3cdefs%3e%3clinearGradient id='a' x1='50%25' x2='50%25' y1='0%25' y2='100%25'%3e%3cstop offset='0%25' stop-color='%2318AFFF'/%3e%3cstop offset='100%25' stop-color='%230062DF'/%3e%3c/linearGradient%3e%3cfilter id='c' width='118.8%25' height='118.8%25' x='-9.4%25' y='-9.4%25' filterUnits='objectBoundingBox'%3e%3cfeGaussianBlur in='SourceAlpha' result='shadowBlurInner1' stdDeviation='1'/%3e%3cfeOffset dy='-1' in='shadowBlurInner1' result='shadowOffsetInner1'/%3e%3cfeComposite in='shadowOffsetInner1' in2='SourceAlpha' k2='-1' k3='1' operator='arithmetic' result='shadowInnerInner1'/%3e%3cfeColorMatrix in='shadowInnerInner1' values='0 0 0 0 0 0 0 0 0 0.299356041 0 0 0 0 0.681187726 0 0 0 0.3495684 0'/%3e%3c/filter%3e%3cpath id='b' d='M8 0a8 8 0 00-8 8 8 8 0 1016 0 8 8 0 00-8-8z'/%3e%3c/defs%3e%3cg fill='none'%3e%3cuse fill='url(%23a)' xlink:href='%23b'/%3e%3cuse fill='black' filter='url(%23c)' xlink:href='%23b'/%3e%3cpath fill='white' d='M12.162 7.338c.176.123.338.245.338.674 0 .43-.229.604-.474.725a.73.73 0 01.089.546c-.077.344-.392.611-.672.69.121.194.159.385.015.62-.185.295-.346.407-1.058.407H7.5c-.988 0-1.5-.546-1.5-1V7.665c0-1.23 1.467-2.275 1.467-3.13L7.361 3.47c-.005-.065.008-.224.058-.27.08-.079.301-.2.635-.2.218 0 .363.041.534.123.581.277.732.978.732 1.542 0 .271-.414 1.083-.47 1.364 0 0 .867-.192 1.879-.199 1.061-.006 1.749.19 1.749.842 0 .261-.219.523-.316.666zM3.6 7h.8a.6.6 0 01.6.6v3.8a.6.6 0 01-.6.6h-.8a.6.6 0 01-.6-.6V7.6a.6.6 0 01.6-.6z'/%3e%3c/g%3e%3c/svg%3e"
                      alt=""
                      className="like-icon"
                    />
                    <span style={{ marginLeft: "5px" }}>151K</span>
                  </div>
                  <div style={{ display: "flex" }}>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        marginRight: "12px",
                      }}
                    >
                      <span>884</span>
                      <img src={comment} alt="" className="small-icon" />
                    </div>
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <span>2.1K</span>
                      <img src={share} className="small-icon" />
                    </div>
                  </div>
                </div>
                <div className="home23-bottom2">
                  <div className="home23-bottom2-item">
                    <img src={like} alt="" className="appr-icon"/>
                    <span>Like</span>
                  </div>
                  <div className="home23-bottom2-item">
                    <img src={comment} alt="" className="appr-icon"/>
                    <span>Comment</span>
                  </div>
                  <div className="home23-bottom2-item">
                    <img src={share} alt="" className="appr-icon"/>
                    <span>Share</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="home3">
          <h3>Group Conversations</h3>
          <div style={{display:"flex",marginTop:"15px"}}>
            <p className="plus-circle">
            <i class="fa-solid fa-plus"></i>
            </p>
            <h4>Create New Group</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
