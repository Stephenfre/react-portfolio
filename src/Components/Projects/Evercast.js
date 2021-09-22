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
                        <a
                            href="/"
                            className="btn-links-project"
                            style={{ color: "darkgrey", background: "grey", pointerEvents: "none" }}
                        >
                            View Project
                        </a>
                        <a
                            disable
                            href="https://github.com/Stephenfre/earth-dashboard-fe"
                            className="btn2-links-project"
                            style={{ color: "grey", border: "1px solid grey", pointerEvents: "none" }}
                        >
                            View Github
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
                    <br />
                    <div className="role-info">
                        <p>My Role:</p>
                        <p>Evercast is in the design stage. I'll be designing this app using figma.</p>
                    </div>
                </div>
                <div className="project-img">
                    <img src={Cloudy} alt="cloudy" />
                </div>
                <div className="btn2">
                    <a
                        href="/"
                        className="btn-links-project"
                        style={{ color: "darkgrey", background: "grey", pointerEvents: "none" }}
                    >
                        View Project
                    </a>
                    <a
                        href="/"
                        className="btn2-links-project"
                        style={{ color: "grey", border: "1px solid grey", pointerEvents: "none" }}
                    >
                        View Github
                    </a>
                </div>
            </div>
        </div>
    );
}
