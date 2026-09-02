import One from "./One";
import Two from "./Two";
import Three from "./Three";
import "./css/App.css";
import "./css/Three.css";

export default function App() {
    return <>
        <div className="App" style={{ width: "100%", maxWidth: "100vw" }}>
            <One />
            <Two />
            <Three />
        </div>
    </>;
}