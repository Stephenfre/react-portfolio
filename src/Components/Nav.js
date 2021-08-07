import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

export default function Navigation() {
    return (
        <div className="nav">
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
