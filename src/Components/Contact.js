import React from "react";
import HomeNav from "./HomeNav";

export default function Contact() {
    return (
        <div className="container">
            <HomeNav />
            <div className="content">
                <div className="about-me">
                    <h1>Contact</h1>
                    <h5 style={{ padding: "25px 0" }}>
                        <strong>Email: </strong>{" "}
                        <a href={"mailto:stephen.freeman.dev@gmail.com"}>stephen.freeman.dev@gmail.com </a>
                    </h5>
                    <h5 style={{ padding: "25px 0" }}>
                        <strong>LinkedIn: </strong>{" "}
                        <a href="https://www.linkedin.com/in/stephen-freeman/">linkedin.com/Stephen Freeman</a>
                    </h5>
                    <h5 style={{ padding: "25px 0" }}>
                        <strong>Github:</strong> <a href="https://www.github.com/stephenfre">Stephenfre</a>
                    </h5>
                    <h5 style={{ padding: "25px 0" }}>
                        <strong>Twitter: </strong> <a href="https://www.twitter.com/devstephenfre">@Devstephenfre</a>
                    </h5>
                </div>
            </div>
        </div>
    );
}
