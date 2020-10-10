import React from "react";
import { connect } from "react-redux";
import MenuBar from "./components/MenuBar";
import ExitBar from "./components/ExitBar";
import "./public/stylesheets/App.css";
import InfluencerPage from "./components/InfluencerPage";

const App = (props) => {
    return (
        <div className="flexcontainer">
            <MenuBar></MenuBar>
            <div className="flexColumn">
                <ExitBar></ExitBar>
                {props.currPage === "INFLUENCERS" ? (
                    <InfluencerPage></InfluencerPage>
                ) : (
                    <div />
                )}
            </div>
        </div>
    );
};

function mapStateToProps(state) {
    return {
        currPage: state,
    };
}
export default connect(mapStateToProps)(App);
