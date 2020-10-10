import React, { Component } from "react";
import "../public/stylesheets/MenuBar.css";
import logo from "../public/images/logo.png";
import profile from "../public/images/profile.png";
import Fab from "@material-ui/core/Fab";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import DashboardIcon from "@material-ui/icons/Dashboard";
import SearchIcon from "@material-ui/icons/Search";
import PeopleIcon from "@material-ui/icons/People";
import ImageIcon from "@material-ui/icons/Image";
import StarIcon from "@material-ui/icons/Star";
import RateReviewIcon from "@material-ui/icons/RateReview";
import AccountBoxIcon from "@material-ui/icons/AccountBox";

import MenuPageTab from "./MenuPageTab";

class MenuBar extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div id="menuBar">
                <div id="logoContainer">
                    <img id="imageBox" src={logo}></img>
                </div>
                <div id="clientProfile">
                    <img id="profilePic" src={profile} />
                    <div id="profileName">Smash Kitchen</div>
                    <div id="profileType">Restaurant</div>
                </div>
                <div id="nodeButton">
                    <Fab
                        variant="extended"
                        style={{
                            backgroundColor: "white",
                            fontSize: "14px",
                            fontWeight: "500",
                            lineHeight: "17px",
                            marginTop: "16px",
                            marginBottom: "16px",
                            textTransform: "none",
                            color: "#404040",
                        }}
                    >
                        <AddCircleIcon style={{ margin: "2px" }} />
                        Create Node
                    </Fab>
                </div>
                <div id="menuButtonContainer">
                    <MenuPageTab
                        page="Dashboard"
                        id="DASHBOARD"
                        pageIcon={
                            <DashboardIcon
                                style={{
                                    marginLeft: "12px",
                                    marginRight: "5px",
                                }}
                            />
                        }
                    />
                    <MenuPageTab
                        page="My Nodes"
                        id="MY_NODES"
                        pageIcon={
                            <SearchIcon
                                style={{
                                    marginLeft: "12px",
                                    marginRight: "5px",
                                }}
                            />
                        }
                    />
                    <MenuPageTab
                        page="Influencers"
                        id="INFLUENCERS"
                        pageIcon={
                            <PeopleIcon
                                style={{
                                    marginLeft: "12px",
                                    marginRight: "5px",
                                }}
                            />
                        }
                    />
                    <MenuPageTab
                        page="Content"
                        id="CONTENT"
                        pageIcon={
                            <ImageIcon
                                style={{
                                    marginLeft: "12px",
                                    marginRight: "5px",
                                }}
                            />
                        }
                    />
                    <MenuPageTab
                        page="Favorite"
                        id="FAVORITE"
                        pageIcon={
                            <StarIcon
                                style={{
                                    marginLeft: "12px",
                                    marginRight: "5px",
                                }}
                            />
                        }
                    />
                    <MenuPageTab
                        page="Reviews"
                        id="REVIEWS"
                        pageIcon={
                            <RateReviewIcon
                                style={{
                                    marginLeft: "12px",
                                    marginRight: "5px",
                                }}
                            />
                        }
                    />
                    <MenuPageTab
                        page="Profile"
                        id="PROFILE"
                        pageIcon={
                            <AccountBoxIcon
                                style={{
                                    marginLeft: "12px",
                                    marginRight: "5px",
                                }}
                            />
                        }
                    />
                </div>
            </div>
        );
    }
}

export default MenuBar;
