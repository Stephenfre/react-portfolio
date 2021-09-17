import React from "react";
import Nav from "./Nav";
import ProjectLinks from "./Projects/ProjectsLinks";
import Earth from "../Svg/earth.svg";

export default function Contact() {
    return (
        <React.Fragment>
            <Nav />
            <div className="content">
                <ProjectLinks />
                <div className="project-info">
                    <h1>Contact</h1>
                    <h5>React / Python / D3 / Material UI</h5>
                    <p>
                        Planet Dashboard is a realtime real world dashboard that teachs middle school students the
                        fundamentals of data visualization using real world / realtime earth data pulled and refreshed
                        from a variety of sources. There's multiple lessons for different aspects of planet earth that
                        are interesting and important. Lacus ac elit, cursus lobortis magna accumsan. Nisl habitasse.
                    </p>
                    <div className="role-info">
                        <h5 style={{ fontSize: "16px", fontWeight: "600" }}>My Role:</h5>
                        <p style={{ padding: "0", fontWeight: "600" }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo aliquam enim egestas in
                            purus fames augue. Eu elementum ac tempor, orci.
                        </p>
                    </div>
                </div>
                <div className="project-img">
                    <img src={Earth} alt="earth" />
                </div>
                <div className="btn2">
                    <a href="https://planetdata.vision/" className="btn-links-project">
                        View Project
                    </a>
                    <a href="https://github.com/Stephenfre/earth-dashboard-fe" className="btn2-links-project">
                        View Github
                    </a>
                </div>
            </div>
        </React.Fragment>
    );
}
