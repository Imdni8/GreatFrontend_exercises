import "./App.css";
import heroImg from "./assets/hero-img.jpg";
import Tag from "./components/tag";
import ButtonArrowRight from "./components/buttonArrowRight";
import { FaArrowRight } from "react-icons/fa6";

function App() {
    return (
        <div className="card">
            <img src={heroImg} alt="hero-img" />
            <div className="content">
                <Tag>Interior</Tag>
                <p className="card-title">Top 5 Living Room Inspirations</p>
                <p className="card-desc">
                    Curated vibrants colors for your living, make it pop & calm
                    in the same time.
                </p>
                <ButtonArrowRight>Read more</ButtonArrowRight>
            </div>
        </div>
    );
}

export default App;
