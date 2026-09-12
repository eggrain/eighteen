import Article18OutOfServiceFlyer from "./Article18OutOfServiceFlyer";
import Article18OutOfServiceFlyerV2 from "./Article18OutOfServiceFlyerV2";
import Article18OutOfServiceFlyerV3 from "./Article18OutOfServiceFlyerV3";
import Article18Section24Flyer from "./Article18Section24Flyer";
import Article18Section24FlyerV2 from "./Article18Section24FlyerV2";
import Article44Over150Flyer from "./Article44Over150Flyer";
import OriginalThree from "./OriginalThree";

export default function App() {
    return <>
        <div className="App" style={{ width: "100%", maxWidth: "100vw" }}>
            <OriginalThree />
            <Article18OutOfServiceFlyer />
            <Article18Section24Flyer />
            <Article44Over150Flyer />
            <Article18OutOfServiceFlyerV2 />
            <Article18OutOfServiceFlyerV3 />
            <Article18Section24FlyerV2 />
        </div>
    </>;
}