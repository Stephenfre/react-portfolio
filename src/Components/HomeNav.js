import React from "react";
import { Link } from "react-router-dom";
import MobileHomeBurger from "./MobileHomeBurger";
import Resume from "../Docs/Resume2021.pdf";

import "./Nav.css";

export default function HomeNav() {
    return (
        <React.Fragment>
            <div className="nav" style={{ borderBottom: "0.5px solid #e6e6e6" }}>
                <ul>
                    <Link to="/" className="Link" style={{ color: "#564f48" }}>
                        <li>Home</li>
                    </Link>
                    <Link to="/project/planetdata" className="Link" style={{ color: "#564f48" }}>
                        <li>Projects</li>
                    </Link>
                    <a href={Resume} className="Link" style={{ color: "#564f48" }}>
                        <li>Resume</li>
                    </a>

                    <a href="https://medium.com/drippingincode" className="Link" style={{ color: "#564f48" }}>
                        <li>Blog</li>
                    </a>

                    <Link to="/contact" className="Link" style={{ color: "#564f48" }}>
                        <li>Contact</li>
                    </Link>
                </ul>
            </div>
            <div className="nav-mobile">
                <MobileHomeBurger />
            </div>
        </React.Fragment>
    );
}
