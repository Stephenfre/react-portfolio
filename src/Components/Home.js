import React from "react";
import { Link } from "react-router-dom";

import "./Home.css";
import Memoji from "../Svg/memoji.svg";
import HomeNav from "./HomeNav";

export default function Home() {
    return (
        <div className="container">
            <HomeNav />
            <div className="content">
                <div className="about-me">
                    <div className="btn-mobile">
                        <Link to="/project/planetdata" className="btn-links">
                            View Projects
                        </Link>
                        <a href="https://github.com/Stephenfre" className="btn2-links">
                            View Github
                        </a>
                    </div>
                    <h1>Stephen Freeman Jr.</h1>
                    <h5>Fullstack Engineer</h5>
                    <p className="skills">React | Redux | MonogDB | Node JS | SASS | Bootstrap | Jest </p>
                    <p>
                        Hi, I’m Stephen. I’m a developer living in Phoenix, Az. I am currently looking for an internship
                        or job opportunity where I can grow as a developer and lend my skills to a team. I love coding
                        because it allows me to explore my creativity and create something that people all around the
                        world can use. When I’m not coding, I’m making music, going to the gym, or reading.
                    </p>
                </div>
                <div className="about-me-img">
                    <img src={Memoji} alt="Memoji" />
                </div>
                <div className="btn">
                    <Link to="/project/planetdata" className="btn-links">
                        View Projects
                    </Link>
                    <a href="https://github.com/Stephenfre" className="btn2-links">
                        View Github
                    </a>
                </div>
            </div>
        </div>
    );
}
