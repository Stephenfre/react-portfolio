import React from "react";
import { Link } from "react-router-dom";

import Nav from "../Nav";
import "./Project.css";
import Earth from "../../Svg/3d-earth.png";

export default function GrailHouse() {
    return (
        <div className="container">
            <Nav />
            <div className="content">
                <div className="project-links-list">
                    <ul className="project-ul">
                        <Link to="/project/planetdata" className="project-links">
                            <li></li>
                        </Link>
                        <Link to="/project/grailhouse" className="project-links">
                            <li></li>
                        </Link>
                        <Link className="project-links">
                            <li></li>
                        </Link>
                        <Link className="project-links">
                            <li></li>
                        </Link>
                    </ul>
                </div>
                <div className="project-info">
                    <h1>Grail House </h1>
                    <h5>React / Redux / Node JS / Css</h5>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo aliquam enim egestas in purus
                        fames augue. Eu elementum ac tempor, orci. Aliquam pharetra vulputate luctus lacus. Mi, platea
                        sem eget ridiculus lobortis ullamcorper a. Turpis pharetra eget blandit a ultrices vel lacinia
                        pellentesque. Lacus ac elit, cursus lobortis magna accumsan. Nisl habitasse sit dolor in id.{" "}
                    </p>
                </div>
                <div className="project-img">
                    <img src={Earth} alt="desk" />
                </div>
                <div className="btn">
                    <a href="https://grailhouse.app" className="btn-links-project">
                        View Projects
                    </a>
                    <a href="https://github.com/grailhouse" className="btn2-links-project">
                        View Github
                    </a>
                </div>
            </div>
        </div>
    );
}
