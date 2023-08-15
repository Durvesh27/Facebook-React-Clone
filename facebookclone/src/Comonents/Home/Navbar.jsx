import React from 'react'
import home from '../../Images/home.png'
import people from '../../Images/people.png'
import cake from '../../Images/cake.png'
import play from '../../Images/play.png'
import multi from  '../../Images/multi.png'
import bell from  '../../Images/bell.png'
import profile from  '../../Images/profile.png'
import message from  '../../Images/message.png'
const Navbar = () => {
  return (
<header>
<nav className='navbar'>
<div className='nav-1'>
    <img src="https://cdn-icons-png.flaticon.com/512/5968/5968764.png" alt="err" className='fb-logo'/>
    <input type="text" placeholder='Search Facebook' className='nav-ip'/>
    <i class="fa-solid fa-magnifying-glass search-icon" ></i>
</div>
<div className='nav-2'>
<div className="nav-2-box">
<img src={home} alt="" />
</div>
<div className="nav-2-box">
<img src={people} alt="" />
</div>
<div className="nav-2-box">
<img src={play} alt="" />
</div>
<div className="nav-2-box">
<img src={cake} alt="" />
</div>

</div>
<div className='nav-3'>
<img src={multi} alt=""/>
<img src={message} alt=""/>
<img src={bell} alt=""/>
<img src={profile} alt="" />
</div>
</nav>
</header>
  )
}

export default Navbar
