import React from "react";
import { Link } from "react-router-dom";

import Nav from "./Nav";
import "./Home.css";
import Memoji from "../Svg/memoji.svg";

export default function Home() {
    return (
        <React.Fragment>
            <Nav />
            <div className="content">
                <div className="about-me">
                    <div className="btn-mobile">
                        <Link to="/project/planetdata" className="btn-links">
                            View Projects
                        </Link>
                        <a href="https://github.com/Stephenfre" className="btn2-links">
                            View Github
                        </a>
                    </div>
                    <h1>Stephen Freeman Jr.</h1>
                    <h5>Fullstack Engineer</h5>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo aliquam enim egestas in purus
                        fames augue. Eu elementum ac tempor, orci. Aliquam pharetra vulputate luctus lacus. Mi, platea
                        sem eget ridiculus lobortis ullamcorper a. Turpis pharetra eget blandit a ultrices vel lacinia
                        pellentesque. Lacus ac elit, cursus lobortis magna accumsan. Nisl habitasse sit dolor in id.{" "}
                    </p>
                </div>
                <div className="about-me-img">
                    <img src={Memoji} alt="Memoji" />
                </div>
                <div className="btn">
                    <Link to="/project/planetdata" className="btn-links">
                        View Projects
                    </Link>
                    <a href="https://github.com/Stephenfre" className="btn2-links">
                        View Github
                    </a>
                </div>
            </div>
        </React.Fragment>
    );
}
