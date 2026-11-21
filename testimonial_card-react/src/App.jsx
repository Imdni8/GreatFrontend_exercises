import "./App.css";
import profImg from "./assets/profile-thumbnail.png";

function App() {
    return (
        <div className="testimonial-card">
            <div className="top">
                <img src={profImg} alt="Profile thumbnail" />
                <div>
                    <h1>Sarah Dole</h1>
                    <p>@sarahdole</p>
                </div>
            </div>
            <p className="content">
                I've been searching for high-quality abstract images for my
                design projects, and I'm thrilled to have found this platform.
                The variety and depth of creativity are astounding!
            </p>
        </div>
    );
}

export default App;
