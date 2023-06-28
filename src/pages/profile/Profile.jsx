import "./profile.scss";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import PinterestIcon from "@mui/icons-material/Pinterest";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import PlaceIcon from "@mui/icons-material/Place";
import LanguageIcon from "@mui/icons-material/Language";
import EmailIcon from "@mui/icons-material/Email";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Posts from "../../components/posts/Posts"

const Profile = () => {
  return (
    <div className="profile">
      <div className="images">
        <img
          className="cover"
          src="https://images.pexels.com/photos/16972895/pexels-photo-16972895/free-photo-of-insanlar-araba-bagbozumu-chrome.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
        />
        <img
          className="profilePic"
          src="https://images.pexels.com/photos/16683543/pexels-photo-16683543/free-photo-of-ella.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
        />
      </div>
      <div className="profileContainer">
        <div className="userInfo">
          <div className="left">
            <a href="http://facebook.com">
              <FacebookOutlinedIcon fontSize="large" />
            </a>
            <a href="http://facebook.com">
              <InstagramIcon fontSize="large" />
            </a>
            <a href="http://facebook.com">
              <TwitterIcon fontSize="large" />
            </a>
            <a href="http://facebook.com">
              <LinkedInIcon fontSize="large" />
            </a>
            <a href="http://facebook.com">
              <PinterestIcon fontSize="large" />
            </a>
          </div>
          <div className="center">
            <span>Jane Doe</span>
            <div className="info">
              <div className="item">
                {" "}
                <PlaceIcon />
                <span>USA</span>
              </div>
              <div className="item">
                {" "}
                <LanguageIcon />
                <span>crow@dev.com</span>
              </div>
            </div>
              <button>Follow</button>
          </div>
          <div className="right">
            <EmailIcon/>
            <MoreVertIcon/>
          </div>
        </div>
      </div>
      <Posts/>
    </div>
  );
};

export default Profile;
