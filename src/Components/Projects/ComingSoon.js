import React from "react";

import Nav from "../Nav";
import "./Project.css";
import Earth from "../../Svg/earth.svg";
import ProjectLinks from "./ProjectsLinks";

export default function ComingSoon() {
    return (
        <React.Fragment>
            <Nav />
            <div className="content">
                <ProjectLinks />
                <div className="project-info">
                    <div className="btn2-mobile">
                        <a href="https://planetdata.vision/" className="btn-links-project">
                            View Project
                        </a>
                        <a href="https://github.com/Stephenfre/earth-dashboard-fe" className="btn2-links-project">
                            View Github
                        </a>
                    </div>
                    <h1>Coming Soon</h1>
                    <h5>React / NodeJs / Tailwind CSS</h5>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo aliquam enim egestas in purus
                        fames augue. Eu elementum ac tempor, orci. Aliquam pharetra vulputate luctus lacus. Mi, platea
                        sem eget ridiculus lobortis ullamcorper a. Turpis pharetra eget blandit a ultrices vel lacinia
                        pellentesque. Lacus ac elit, cursus lobortis magna accumsan. Nisl habitasse sit dolor in id.{" "}
                    </p>
                    <div className="role-info">
                        <h5>My Role:</h5>
                        <p>
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
