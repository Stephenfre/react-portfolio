import React from "react";

import Nav from "../Nav";
import "./Project.css";
import WrinklLogo from "../../Svg/wrinkl.svg";
import ProjectLinks from "./ProjectsLinks";

export default function Wrinkl() {
    return (
        <div className="container" style={{ background: "#2D3440" }}>
            <Nav />
            <hr className="hr" style={{ border: " 1px solid #292f3a" }} />
            <div className="content">
                <ProjectLinks />
                <div className="project-info">
                    <div className="btn2-mobile">
                        <a href="https://wrinkl.io/" className="btn-links-project" style={{ color: "#292f3a" }}>
                            View Project
                        </a>
                        <a href="https://github.com/Stephenfre/earth-dashboard-fe" className="btn2-links-project">
                            View Github
                        </a>
                    </div>
                    <h1>Wrinkl</h1>
                    <h5>React / NodeJs / Tailwind CSS</h5>
                    <p>
                        Wrinkl is professional laundry service that dry clean and launders your clothes before returning
                        them to you. Wrinkl takes care of all the hassles so you can focus on doing what's important.
                        Wrinkl gives you the time back in your day so you can focus on what matters most to YOU!
                    </p>
                    <br />

                    <div className="role-info">
                        <p>My Role:</p>
                        <p>
                            Wrinkl is a company my brother and I started. My main responsibility so far has been to
                            design the user flow, and building Microfrontends.
                        </p>
                    </div>
                </div>
                <div className="project-img">
                    <img src={WrinklLogo} alt="logo" />
                </div>
                <div className="btn2">
                    <a href="https://wrinkl.io/" className="btn-links-project" style={{ color: "#292f3a" }}>
                        View Project
                    </a>
                    {/* <a href="https://github.com/Stephenfre/earth-dashboard-fe" className="btn2-links-project">
                        View Github
                    </a> */}
                </div>
            </div>
        </div>
    );
}
