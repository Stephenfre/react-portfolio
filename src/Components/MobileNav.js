import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Resume from "../Docs/Resume2021.pdf";

const Ul = styled.ul`
    list-style: none;
    display: flex;
    flex-flow: row nowrap;
    overflow: auto;
    li {
        padding: 18px 10px;
    }
    @media (max-width: 600px) {
        flex-flow: column nowrap;
        background-color: #fff;
        position: fixed;
        transform: ${({ open }) => (open ? "translateX(0%)" : "translateX(200%)")};
        top: -2;
        right: 0;
        height: 100vh;
        width: 100%;
        padding-top: 1.5rem;
        transition: transform 0.6s ease-in-out;
        li {
            font-size: 36px;
            font-weight: 300;
            font-family: "Roboto", sans-serif;
            color: #564f48;
        }
    }
    z-index: 9998;
`;

// const Links = styled(Link)`
//     text-decoration: none;
//     color: #afafaf;
//     font-size: 20px;
// `;

const MobileNav = ({ open }) => {
    return (
        <Ul open={open}>
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
        </Ul>
    );
};

export default MobileNav;
