import React, { useState } from "react";
import styled from "styled-components";
import MobileNav from "./MobileNav";

const StyledBurger = styled.div`
    width: 2rem;
    height: 2rem;
    position: fixed;
    top: 1.8%;
    left: 86%;
    z-index: 9999;
    display: none;
    @media (max-width: 600px) {
        display: flex;
        justify-content: space-around;
        flex-flow: column nowrap;
    }
    div {
        width: 2rem;
        height: 0.25rem;
        background-color: ${({ open }) => (open ? "#564f48" : "white")};
        border-radius: 10px;
        transform-origin: 1px;
        transition: all 0.3s linear;
        &:nth-child(1) {
            transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
        }
        &:nth-child(2) {
            transform: ${({ open }) => (open ? "translateX(-100%)" : "translateX(0)")};
            opacity: ${({ open }) => (open ? 0 : 1)};
        }
        &:nth-child(3) {
            transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
        }
    }
`;

const Burger = () => {
    const [open, setOpen] = useState(false);

    return (
        <React.Fragment>
            <StyledBurger open={open} onClick={() => setOpen(!open)}>
                <div />
                <div />
                <div />
            </StyledBurger>
            <MobileNav open={open} />
        </React.Fragment>
    );
};

export default Burger;
