
//Navbar Component
import React, { Component } from "react";
import "./style.css";

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-default navbar-fixed-top">
                <div>
                    Score: {this.props.score}
                    </div>
            </nav>
        );
    }
}

export default Navbar;