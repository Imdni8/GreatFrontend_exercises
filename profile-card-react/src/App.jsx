import "./App.css";
import ProfileCard from "./components/ProfileCard";

function App() {
    return (
        <ProfileCard
            name={"Sarah Dole"}
            title={"Frontend engineer"}
            company={"Microsoft"}
        >
            I turn coffee into bugs which are fixed by someone else. Certified
            Stack Overflow and ChatGPT developer.
        </ProfileCard>
    );
}

export default App;
