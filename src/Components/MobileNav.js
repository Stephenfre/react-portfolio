import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

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

const Links = styled(Link)`
    text-decoration: none;
    color: #afafaf;
    font-size: 20px;
`;

const MobileNav = ({ open }) => {
    return (
        <Ul open={open}>
            <Links to="/" className="Link">
                <li>Home</li>
            </Links>
            <Links to="/project/planetdata" className="Link">
                <li>Projects</li>
            </Links>

            <Links className="Link" to="/">
                <li>Resume</li>
            </Links>

            <Links to="/" className="Link">
                <li>Blog</li>
            </Links>

            <Links to="/contact" className="Link">
                <li>Contact</li>
            </Links>
        </Ul>
    );
};

export default MobileNav;
