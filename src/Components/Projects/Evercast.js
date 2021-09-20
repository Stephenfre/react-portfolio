import React from "react";

import Nav from "../Nav";
import "./Project.css";
import Cloudy from "../../Svg/evercast.svg";
import ProjectLinks from "./ProjectsLinks";

export default function Evercast() {
    return (
        <div className="container" style={{ background: "#FFB800" }}>
            <Nav />
            <hr className="hr" style={{ border: " 1px solid #f7b200" }} />
            <div className="content">
                <ProjectLinks />
                <div className="project-info">
                    <div className="btn2-mobile">
                        <a href="/" className="btn-links-project" style={{ color: "#FFB800" }}>
                            Coming Soon
                        </a>
                        <a href="https://github.com/Stephenfre/earth-dashboard-fe" className="btn2-links-project">
                            Coming Soon
                        </a>
                    </div>
                    <h1>Evercast</h1>
                    <h5>React Native / Tailwind CSS</h5>
                    <p>
                        The Evercast weather forecast app gives you accurate day-by-day forecasts for wherever your
                        location happens to be. Forecasts are presented in easy-to-read, concise view packed with
                        information like precipitation probability, high and low temperatures, wind behavior (or lack
                        thereof), dew point, humidity percentage.
                    </p>
                    <div className="role-info">
                        <p style={{ paddingTop: "33px" }}>My Role:</p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo aliquam enim egestas in
                            purus fames augue. Eu elementum ac tempor, orci.
                        </p>
                    </div>
                </div>
                <div className="project-img">
                    <img src={Cloudy} alt="cloudy" />
                </div>
                <div className="btn2">
                    <a href="/" className="btn-links-project" style={{ color: "#FFB800" }}>
                        Coming Soon
                    </a>
                    <a href="https://github.com/Stephenfre/earth-dashboard-fe" className="btn2-links-project">
                        Coming Soon
                    </a>
                </div>
            </div>
        </div>
    );
}
