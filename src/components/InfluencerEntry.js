import React, { Component } from "react";
import "../public/stylesheets/InfluencerEntry.css";
import moment from "moment";

const InfluencerEntry = ({ profilePic, handler, status, date, name }) => (
    <div className="entryContainer">
        <div id="picContainer">
            <img className="influencerPic" src={profilePic} alt="" />
        </div>
        <div id="influencerInfoContainer">
            <div id="handleLine">
                <div id="handleAndNameContainer">
                    <span id="influencerHandleText">@{handler}</span>
                    <span id="influencerNameText">{name}</span>
                </div>
                <div>
                    {status === "activate" ? (
                        <span id="activeColor" className="statusText">
                            Shipped
                        </span>
                    ) : status === "submit" ? (
                        <span id="submitColor" className="statusText">
                            Submitted
                        </span>
                    ) : status === "claimed" ? (
                        <span id="claimedColor" className="statusText">
                            Claimed
                        </span>
                    ) : (
                        <div />
                    )}
                </div>
            </div>
            <div id="dateContentContainer">
                <span id="dateContentText">
                    {moment(date).format("ll")}{" "}
                    <span id="contentText">
                        - Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit. Suspendisse velit massa
                    </span>
                </span>
            </div>
        </div>
    </div>
);

export default InfluencerEntry;
