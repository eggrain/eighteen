import Article18OutOfServiceFlyer from "./Article18OutOfServiceFlyer";
import Article18OutOfServiceFlyerV2 from "./Article18OutOfServiceFlyerV2";
import Article18OutOfServiceFlyerV3 from "./Article18OutOfServiceFlyerV3";
import Article18Section24Flyer from "./Article18Section24Flyer";
import Article18Section24FlyerV2 from "./Article18Section24FlyerV2";
import Article44Over150Flyer from "./Article44Over150Flyer";
import OriginalThree from "./OriginalThree";
import Article44Section1 from "./Article44Section1";
import Over70V2 from "./Over70V2";
import Over70V3 from "./Over70V3";
import Over70V4 from "./Over70V4";
import SafetyStaffingFlyer from "./SafetyStaffingFlyer";
import SafetyStaffingFlyerV2 from "./SafetyStaffingFlyerV2";
import SafetyStaffingFlyerV3 from "./SafetyStaffingFlyerV3";

export default function App() {
    return <>
        <div className="App" style={{ width: "100%", maxWidth: "100vw" }}>
            {/* <SafetyStaffingFlyerV3  /> */}
            <SafetyStaffingFlyerV2 />
            {/* <SafetyStaffingFlyer />
            <Article44Section1 />
            <Over70V2 />
            <Over70V3 />
            <Over70V4 />
            <OriginalThree />
            <Article18OutOfServiceFlyer />
            <Article18Section24Flyer />
            <Article44Over150Flyer />
            <Article18OutOfServiceFlyerV2 />
            <Article18OutOfServiceFlyerV3 />
            <Article18Section24FlyerV2 /> */}
        </div>
    </>;
}