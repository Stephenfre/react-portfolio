import React from "react";
import Nav from "./Nav";
import DeskSetup from "../Svg/desk-setup.png";
import "./Home.css";
import { Link } from "react-router-dom";
export default function PlanetData() {
    return (
        <div className="container">
            <Nav />
            <div className="content">
                <div className="about-me">
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
                    <img src={DeskSetup} alt="desk" />
                </div>
                <Link to="/project/planetdata" className="btn-links">
                    View Projects
                </Link>
            </div>
        </div>
    );
}
