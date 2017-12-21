import React from "react";

export default class About extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div class="about-page container">
                <h3>So what is this site all about?</h3>
                <p>This site is created as assignment for the course Web Technology at the Technical university of Eindhoven.</p>
                <p>It is created by: Me</p>
            </div>
        );
    }
}