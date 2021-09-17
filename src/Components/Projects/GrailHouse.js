import React from "react";

import Nav from "../Nav";
import "./Project.css";
import GrailHouseSvg from "../../Svg/Ghouselogo.svg";
import ProjectLinks from "./ProjectsLinks";

export default function GrailHouse() {
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
                    <h1>Grail House </h1>
                    <h5>React / Redux / Node JS / Css</h5>
                    <p>
                        Grail House is a web, where sneakerheads can showcase their sneaker collection and also see what
                        prices ther sneakers are reselling for on other apps (Stock X, Goat, Stadium Goods, and Flight
                        Club). Turpis pharetra eget blandit a ultrices vel lacinia pellentesque. Lacus ac elit, cursus
                        lobortis magna accumsan. Nisl habitasse sit dolor in id. Nisl habitasse sit dolor in id. Lacus
                        ac elit.{" "}
                    </p>
                    <div className="role-info">
                        <h5>My Role:</h5>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo aliquam enim egestas in
                            purus fames augue. Eu elementum ac tempor, orci.
                        </p>
                    </div>
                </div>
                <div className="project-img-GH">
                    <img src={GrailHouseSvg} alt="GrailHouse" />
                </div>
                <div className="btn2">
                    <a href="https://grailhouse.app" className="btn-links-project">
                        View Project
                    </a>
                    <a href="https://github.com/grailhouse" className="btn2-links-project">
                        View Github
                    </a>
                </div>
            </div>
        </React.Fragment>
    );
}
