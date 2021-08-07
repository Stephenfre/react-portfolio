import React from "react";
import Earth from "../../Svg/3d-earth.png";

export default function PlanetData() {
    return (
        <div>
            <div className="project-info">
                <h1>Planet Data</h1>
                <h5>React / Python / D3 / Material UI</h5>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo aliquam enim egestas in purus fames
                    augue. Eu elementum ac tempor, orci. Aliquam pharetra vulputate luctus lacus. Mi, platea sem eget
                    ridiculus lobortis ullamcorper a. Turpis pharetra eget blandit a ultrices vel lacinia pellentesque.
                    Lacus ac elit, cursus lobortis magna accumsan. Nisl habitasse sit dolor in id.{" "}
                </p>
            </div>
            <div className="project-img">
                <img src={Earth} alt="desk" />
            </div>
        </div>
    );
}
