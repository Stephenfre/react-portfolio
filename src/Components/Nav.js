import React from "react";
import { Link } from "react-router-dom";
import { Icon, InlineIcon } from "@iconify/react";
import houseDoorFill from "@iconify/icons-bi/house-door-fill";

import "./Nav.css";

export default function Navigation() {
    return (
        <div className="nav">
            <Link to="/">
                <Icon
                    icon={houseDoorFill}
                    style={{ color: "#fff", width: "5rem", height: "2rem", marginTop: "20px" }}
                />
            </Link>
            <ul>
                <Link to="/project/planetdata" className="Link">
                    <li>Projects</li>
                </Link>

                <Link to="/" className="Link">
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
    );
}
