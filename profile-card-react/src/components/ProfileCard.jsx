import IconBtn from "./IconBtn";
import image from "../assets/profile-thumbnail.png";
import githubIcon from "../assets/github-fill.svg";
import insta from "../assets/instagram-fill.svg";
import linkedin from "../assets/linkedin-box-fill.svg";
import twitter from "../assets/twitter-x-fill.svg";

export default function ProfileCard({ children, name, title, company }) {
    return (
        <div className="profile-card-container">
            <img src={image} alt="" />
            <div className="name">{name}</div>
            <div className="title-company">
                {title} @ {company}
            </div>
            <p className="content">{children}</p>
            <button>Contact me</button>
            <div className="icons">
                <IconBtn>{githubIcon}</IconBtn>
                <IconBtn>{insta}</IconBtn>
                <IconBtn>{linkedin}</IconBtn>
                <IconBtn>{twitter}</IconBtn>
            </div>
        </div>
    );
}
