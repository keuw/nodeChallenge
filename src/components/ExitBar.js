import React, { Component } from "react";
import "../public/stylesheets/ExitBar.css";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

class ExitBar extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div id="exitBar">
                <ExitToAppIcon
                    fontSize="large"
                    style={{
                        position: "absolute",
                        right: "74px",
                        cursor: "pointer",
                    }}
                />
            </div>
        );
    }
}

export default ExitBar;
