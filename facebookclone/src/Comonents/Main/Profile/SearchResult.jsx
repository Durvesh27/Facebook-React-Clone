import React from "react";
import "./Search.css";
import Navbar from "../../Home/Navbar.jsx";
import search1 from "./../../../Images/search-1.png"
import search2 from "./../../../Images/search2.png"
import search3 from "./../../../Images/search-3.png"
import search4 from "./../../../Images/search-4.png"
import search5 from "./../../../Images/search-5.png"
import search6 from "./../../../Images/search-6.png"
import search7 from "./../../../Images/search-7.png"
import search8 from "./../../../Images/search-8.png"
import search9 from "./../../../Images/search-9.png"
import search10 from "./../../../Images/search-10.png"

const SearchResult = () => {
  return (
    <div>
      <Navbar />
      <div className="search-result">
        <div className="search-result1">
        <h1 className="search-res-text">Search results</h1>
        <h3 style={{fontWeight:600,margin:"10px 0"}}>Filters</h3>
        <div className="search-list">
        <div className="search-list-item">
        <div className="search-list-imgContainer color-blue">
        <img src={search1} alt="" className="search-list-img mix" />
        </div>
        <h3 className="search-list-text">All</h3>
        </div>
        <div className="search-list-item">
        <div className="search-list-imgContainer">
        <img src={search2} alt="" className="search-list-img " />
        </div>
        <h3 className="search-list-text">Posts</h3>
        </div>
        <div className="search-list-item">
        <div className="search-list-imgContainer">
        <img src={search3} alt="" className="search-list-img" />
        </div>
        <h3 className="search-list-text">People</h3>
        </div>
        <div className="search-list-item">
        <div className="search-list-imgContainer">
        <img src={search4} alt="" className="search-list-img" />
        </div>
        <h3 className="search-list-text">Photos</h3>
        </div>
        <div className="search-list-item">
        <div className="search-list-imgContainer">
        <img src={search5} alt="" className="search-list-img" />
        </div>
        <h3 className="search-list-text">Videos</h3>
        </div>
        <div className="search-list-item">
        <div className="search-list-imgContainer">
        <img src={search6} alt="" className="search-list-img" />
        </div>
        <h3 className="search-list-text">Marketplace</h3>
        </div>
        <div className="search-list-item">
        <div className="search-list-imgContainer">
        <img src={search7} alt="" className="search-list-img" />
        </div>
        <h3 className="search-list-text">Pages</h3>
        </div>
        <div className="search-list-item">
        <div className="search-list-imgContainer">
        <img src={search8} alt="" className="search-list-img" />
        </div>
        <h3 className="search-list-text">Places</h3>
        </div>
        <div className="search-list-item">
        <div className="search-list-imgContainer">
        <img src={search9} alt="" className="search-list-img" />
        </div>
        <h3 className="search-list-text">Groups</h3>
        </div>
        <div className="search-list-item">
        <div className="search-list-imgContainer">
        <img src={search10} alt="" className="search-list-img" />
        </div>
        <h3 className="search-list-text">Events</h3>
        </div>
        </div>
        </div>
        <div className="search-result2">
          <div className="search-result2-box">
            <h2 className="fz20">People</h2>
            <div className="search-result2-flex">
            <div className="flex">
            <img src="https://scontent.fbom3-1.fna.fbcdn.net/v/t1.6435-1/118785637_102556721588864_5292399703149342426_n.jpg?stp=cp0_dst-jpg_p60x60&_nc_cat=108&ccb=1-7&_nc_sid=7206a8&_nc_ohc=RvJ7MnS6SwgAX8xrFXE&_nc_ht=scontent.fbom3-1.fna&oh=00_AfBArDkZmA-g1EowlZqbpCiujxTDeVQZwhwaF-bEopYB5w&oe=6505A5E9" alt="" className="friend-box-img" />
            <div>
            <h4 style={{fontSize:"17px"}}>Durvesh Nakhawa</h4>
            <p className="fz15 mtbs" >Friend · Studying at Not Yet Working · University of Mumbai</p>
            <p className="fz15">22 Mutual friends</p>
            </div>
            </div>
            <button className="add-friend-btn">Add Friend</button>
            </div>
            <div className="search-result2-flex">
            <div className="flex">
            <img src="https://scontent.fbom3-1.fna.fbcdn.net/v/t1.6435-1/118785637_102556721588864_5292399703149342426_n.jpg?stp=cp0_dst-jpg_p60x60&_nc_cat=108&ccb=1-7&_nc_sid=7206a8&_nc_ohc=RvJ7MnS6SwgAX8xrFXE&_nc_ht=scontent.fbom3-1.fna&oh=00_AfBArDkZmA-g1EowlZqbpCiujxTDeVQZwhwaF-bEopYB5w&oe=6505A5E9" alt="" className="friend-box-img" />
            <div>
            <h4 style={{fontSize:"17px"}}>Durvesh Nakhawa</h4>
            <p className="fz15 mtbs" >Friend · Studying at Not Yet Working · University of Mumbai</p>
            <p className="fz15">22 Mutual friends</p>
            </div>
            </div>
            <button className="add-friend-btn">Add Friend</button>
            </div>
            <div className="search-result2-flex">
            <div className="flex">
            <img src="https://scontent.fbom3-1.fna.fbcdn.net/v/t1.6435-1/118785637_102556721588864_5292399703149342426_n.jpg?stp=cp0_dst-jpg_p60x60&_nc_cat=108&ccb=1-7&_nc_sid=7206a8&_nc_ohc=RvJ7MnS6SwgAX8xrFXE&_nc_ht=scontent.fbom3-1.fna&oh=00_AfBArDkZmA-g1EowlZqbpCiujxTDeVQZwhwaF-bEopYB5w&oe=6505A5E9" alt="" className="friend-box-img" />
            <div>
            <h4 style={{fontSize:"17px"}}>Durvesh Nakhawa</h4>
            <p className="fz15 mtbs" >Friend · Studying at Not Yet Working · University of Mumbai</p>
            <p className="fz15">22 Mutual friends</p>
            </div>
            </div>
            <button className="add-friend-btn">Add Friend</button>
            </div>
            <div className="search-result2-flex">
            <div className="flex">
            <img src="https://scontent.fbom3-1.fna.fbcdn.net/v/t1.6435-1/118785637_102556721588864_5292399703149342426_n.jpg?stp=cp0_dst-jpg_p60x60&_nc_cat=108&ccb=1-7&_nc_sid=7206a8&_nc_ohc=RvJ7MnS6SwgAX8xrFXE&_nc_ht=scontent.fbom3-1.fna&oh=00_AfBArDkZmA-g1EowlZqbpCiujxTDeVQZwhwaF-bEopYB5w&oe=6505A5E9" alt="" className="friend-box-img" />
            <div>
            <h4 style={{fontSize:"17px"}}>Durvesh Nakhawa</h4>
            <p className="fz15 mtbs" >Friend · Studying at Not Yet Working · University of Mumbai</p>
            <p className="fz15">22 Mutual friends</p>
            </div>
            </div>
            <button className="add-friend-btn">Add Friend</button>
            </div>
            <div className="search-result2-flex">
            <div className="flex">
            <img src="https://scontent.fbom3-1.fna.fbcdn.net/v/t1.6435-1/118785637_102556721588864_5292399703149342426_n.jpg?stp=cp0_dst-jpg_p60x60&_nc_cat=108&ccb=1-7&_nc_sid=7206a8&_nc_ohc=RvJ7MnS6SwgAX8xrFXE&_nc_ht=scontent.fbom3-1.fna&oh=00_AfBArDkZmA-g1EowlZqbpCiujxTDeVQZwhwaF-bEopYB5w&oe=6505A5E9" alt="" className="friend-box-img" />
            <div>
            <h4 style={{fontSize:"17px"}}>Durvesh Nakhawa</h4>
            <p className="fz15 mtbs" >Friend · Studying at Not Yet Working · University of Mumbai</p>
            <p className="fz15">22 Mutual friends</p>
            </div>
            </div>
            <button className="add-friend-btn">Add Friend</button>
            </div>
            <button className="see-all-btn">See all</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchResult;
