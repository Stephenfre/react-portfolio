import React from "react";
import { Link } from "react-router-dom";
import Burger from "./Burger";
import Resume from "../Docs/Resume2021.pdf";

import "./Nav.css";

export default function Navigation() {
    return (
        <React.Fragment>
            <div className="nav">
                <ul>
                    <Link to="/" className="Link">
                        <li>Home</li>
                    </Link>
                    <Link to="/project/planetdata" className="Link">
                        <li>Projects</li>
                    </Link>

                    <a href={Resume} className="Link">
                        <li>Resume</li>
                    </a>

                    <a href="https://medium.com/drippingincode" className="Link">
                        <li>Blog</li>
                    </a>

                    <Link to="/contact" className="Link">
                        <li>Contact</li>
                    </Link>
                </ul>
            </div>
            <div className="nav-mobile">
                <Burger />
            </div>
        </React.Fragment>
    );
}
