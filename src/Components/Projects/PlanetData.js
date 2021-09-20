import React from "react";

import Nav from "../Nav";
import "./Project.css";
import Earth from "../../Svg/earth.svg";
import ProjectLinks from "./ProjectsLinks";

export default function PlanetData() {
    return (
        <div className="container" style={{ background: "#15327A" }}>
            <Nav />
            <hr className="hr" style={{ border: " 1px solid #142e71" }} />
            <div className="content">
                <ProjectLinks />
                <div className="project-info">
                    <div className="btn2-mobile">
                        <a href="https://planetdata.vision/" className="btn-links-project" style={{ color: "#15327A" }}>
                            View Project
                        </a>
                        <a href="https://github.com/Stephenfre/earth-dashboard-fe" className="btn2-links-project">
                            View Github
                        </a>
                    </div>
                    <h1>Planet Data</h1>
                    <h5>React / Python / D3 / Material UI</h5>
                    <p>
                        Planet Data is where learning meets global data driven research! Planet Data is the only
                        platform that curates science-based content, resources and insights to help you glean all the
                        resources available on how global data driven research affects our day-to-day lives. There's
                        multiple visualizations and quizzes for different aspects of planet earth that are interesting
                        and important.
                    </p>
                    <div className="role-info">
                        <p>My Role:</p>
                        <p>
                            My role was to design and build a user freindly dashboard, create quizzes for user
                            interaction, and build multiple visualizations such as the Global Cases and Air Quality
                            Effect visualizations.
                        </p>
                    </div>
                </div>
                <div className="project-img">
                    <img src={Earth} alt="earth" />
                </div>
                <div className="btn2">
                    <a href="https://planetdata.vision/" className="btn-links-project" style={{ color: "#15327A" }}>
                        View Project
                    </a>
                    <a href="https://github.com/Stephenfre/earth-dashboard-fe" className="btn2-links-project">
                        View Github
                    </a>
                </div>
            </div>
        </div>
    );
}
