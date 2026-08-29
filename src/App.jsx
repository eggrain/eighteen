import One from "./One";
import Two from "./Two";
import "./css/App.css";

export default function App() {
    return <>
        <div className="App" style={{ width: "100%", maxWidth: "100vw" }}>
            <One />
            <Two />
        </div>
    </>;
}