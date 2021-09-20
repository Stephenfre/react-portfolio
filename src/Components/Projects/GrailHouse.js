import React from "react";

import Nav from "../Nav";
import "./Project.css";
import GrailHouseSvg from "../../Svg/Ghouselogo.svg";
import ProjectLinks from "./ProjectsLinks";

export default function GrailHouse() {
    return (
        <div className="container" style={{ background: "#1b1b1b" }}>
            <Nav />
            <hr className="hr" style={{ border: " 1px solid #171717" }} />
            <div className="content">
                <ProjectLinks />
                <div className="project-info">
                    <div className="btn2-mobile">
                        <a href="https://grailhouse.app" className="btn-links-project" style={{ color: "black" }}>
                            View Project
                        </a>
                        <a href="https://github.com/Stephenfre/earth-dashboard-fe" className="btn2-links-project">
                            View Github
                        </a>
                    </div>
                    <h1>Grail House </h1>
                    <h5>React / Redux / Node JS / CSS</h5>
                    <p>
                        Grail House is the app sneaker lovers have been waiting for. With over a thousand different
                        pairs of sneakers, Grail House provides a space where you can create your own digital shoe
                        closet and see what prices your shoes are reselling for on other sneaker apps. Soon Grail House
                        will let sneaker collectors show off their prized finds to other enthusiasts all in one place.
                    </p>
                    <div className="role-info">
                        <p>My Role:</p>
                        <p>
                            Grail House started off as a personal project but quickly turned into a passion. This was
                            built using React and MonogDB with Node JS to create a RESTful api. I also used figma for ux
                            / ui design.
                        </p>
                    </div>
                </div>
                <div className="project-img-GH">
                    <img src={GrailHouseSvg} alt="GrailHouse" />
                </div>
                <div className="btn2">
                    <a href="https://grailhouse.app" className="btn-links-project" style={{ color: "black" }}>
                        View Project
                    </a>
                    <a href="https://github.com/grailhouse" className="btn2-links-project">
                        View Github
                    </a>
                </div>
            </div>
        </div>
    );
}
