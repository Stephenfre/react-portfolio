import React from "react";
import { Link } from "react-router-dom";
import Burger from "./Burger";

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

                    <Link className="Link" to="/">
                        <li>Resume</li>
                    </Link>

                    <Link to="/" className="Link">
                        <li>Blog</li>
                    </Link>

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
