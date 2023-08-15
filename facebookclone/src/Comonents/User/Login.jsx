import React from 'react'
import './Login.css'
const Login = () => {
  return (
<div>
<div className="login-body">
<img
        src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg"
        alt="err"
        className="login-main-img"
      />
<div className="login-block">
    <p className='login-text'>Log in to Facebook</p>
    <form> 
        <input type="text" name="" placeholder='Enter address or Phone number' className='login-ip'/><br/>
        <input type="password"  placeholder='Password' className='login-ip'/>
    </form>
    <button className='login-btn'>Log in</button>
    <p className='login-last'>Forgotten account? · Sign up for Facebook</p>
</div>
</div>
<div className="form-footer">
        <div className="form-footer-top">
            <ul className="form-footer-top-flex">
                <li>English (UK)</li>
                <li>मराठी</li>
                <li>हिन्दी</li>
                <li>اردو</li>
                <li>ગુજરાતી</li>
                <li>ಕನ್ನಡ</li>
                <li>ਪੰਜਾਬੀ</li>
                <li>தமிழ்</li>
                <li>বাংলা</li>
                <li>తెలుగు</li>
                <li>മലയാളം</li>
                <i class="fa-regular fa-square-plus fa-xl"></i>
            </ul>
        </div>

        <div className="form-footer-down">
            <ul className="form-footer-down-flex">
            <li>Sign Up</li>
            <li>Log in</li>
            <li>Messenger</li>
            <li>Facebook Lite</li>
            <li>Video</li>
            <li>Places</li>
            <li>Games</li>
            <li>Marketplace</li>
            <li>Meta Pay</li>
            <li>Meta Store</li>
            <li>Meta Quest</li>
            <li>Instagram</li>
            <li>Threads</li>
            <li>Fundraisers</li>
            <li>Sign Up</li>
            <li>Log in</li>
            <li>Messenger</li>
            <li>Facebook Lite</li>
            <li>Video</li>
            <li>Places</li>
            <li>Games</li>
            <li>Marketplace</li>
            <li>Meta Pay</li>
            <li>Meta Store</li>
            <li>Meta Quest</li>
            <li>Instagram</li>
            <li>Threads</li>
            <li>Fundraisers</li>
            <li>Terms</li>
            <li>Help</li>
            <li>Contact uploading and non-users</li>
            </ul>
            <p className="reg-footer-last">Meta © 2023</p>
        </div>
       </div>
</div>
  )
}

export default Login
