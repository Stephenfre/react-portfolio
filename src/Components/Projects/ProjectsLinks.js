import React from "react";
import { NavLink } from "react-router-dom";

import "./Project.css";

export default function ProjectLinks() {
    return (
        <div className="project-links-list">
            <ul className="project-ul">
                <NavLink to="/project/planetdata" activeClassName="active" className="project-links">
                    <li></li>
                </NavLink>
                <NavLink to="/project/grailhouse" className="project-links">
                    <li></li>
                </NavLink>
                <NavLink to="/project/evercast" className="project-links">
                    <li></li>
                </NavLink>
                {/* <NavLink to="/project/wrinkl" className="project-links">
                    <li></li>
                </NavLink> */}
            </ul>
        </div>
    );
}
