import React from "react";
import "./Register.css";
import{ useNavigate} from 'react-router-dom'
const Register = () => {
const router=useNavigate();
  return (
    <div>
        <div className="register-body">
      <img
        src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg"
        alt="err"
        className="register-main-img"
      />
      <div className="register-block">
        <div className="reg-upper-text">
          <h2>Create a new account</h2>
          <p>It's quick and easy.</p>
        </div>

        <div className="reg-content">
          <div className="reg-ip-sec1">
            <input
              type="text"
              name=""
              placeholder="First Name"
              className="reg-sec1-input"
            />
            <input
              type="text"
              name=""
              placeholder="Surname"
              className="reg-sec1-input"
            />
          </div>

          <div className="reg-ip-sec2">
            <input
              type="text"
              name=""
              placeholder="Mobile number or email address"
              className="reg-sec2-input"
            />
            <input
              type="password"
              name=""
              placeholder="New Password"
              className="reg-sec2-input"
            />
          </div>

          <div className="register-dob">
            <p className="register-dob-text">Date of Birth</p>
            <div className="register-dob-flex">
              <select name="" className="reg-sel">
                <option value="14">14</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>

              <select name="" className="reg-sel">
                <option value="August">August</option>
                <option value="September">September</option>
              </select>

              <select name="" className="reg-sel">
                <option value="2023">2023</option>
                <option value="2022">2022</option>
              </select>
            </div>
          </div>

          <div className="register-gender">
            <p className="register-dob-text">Gender</p>
            <div className="register-dob-flex">
              <div className="reg-gender-box reg-sel">
                <p>Male</p>
                <input type="radio" name="" />
              </div>

              <div className="reg-gender-box reg-sel">
                <p>Female</p>
                <input type="radio" name="" />
              </div>

              <div className="reg-gender-box reg-sel">
                <p>Custom</p>
                <input type="radio" name="" />
              </div>
            </div>
          </div>

          <p className="fz-12px">
            People who use our service may have uploaded your contact
            information to Facebook. Learn more.
          </p>
          <p className="fz-12px">
            By clicking Sign Up, you agree to our Terms, Privacy Policy and
            Cookies Policy. You may receive SMS notifications from us and can
            opt out at any time.
          </p>
          <button className="signup-btn">Sign-up</button>
          <p className="reg-last" onClick={()=>router('/login')}>Already have an account? </p>
        </div>
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
  );
};

export default Register;
