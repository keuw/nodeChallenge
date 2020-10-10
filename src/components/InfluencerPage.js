import React, { Component } from "react";
import "../public/stylesheets/InfluencerPage.css";
import InfluencerEntry from "./InfluencerEntry";

class InfluencerPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            api: "https://1pzb5pyogj.execute-api.us-east-1.amazonaws.com/prod",
            businessId: "us-east-1:a7584b1c-f10f-4747-9573-dee791a48297",
            entries: null,
        };
    }

    componentDidMount() {
        const url = this.state.api + "?businessId=" + this.state.businessId;
        fetch(url)
            .then((response) => {
                if (response.status === 200) {
                    console.log(response);
                    return response.json();
                } else {
                    alert("Entries not found");
                }
            })
            .then((json) => {
                console.log(json);
                this.setState({ entries: json });
            })
            .catch((error) => {
                console.log(error);
            });
    }

    getEntries = async (api, businessId) => {
        const request = await fetch(api + "?businessId=" + businessId);
        const data = await request.json();
        if (data.Response === "True") {
            console.log(data);
        }
    };

    render() {
        const { entries } = this.state;
        const entryList = [];

        if (entries) {
            for (let i = 0; i < entries.length; i++) {
                let entry = entries[i];
                entryList.push(
                    <InfluencerEntry
                        handler={entry.handler}
                        status={entry.status}
                        date={entry.date}
                        name={entry.name}
                    ></InfluencerEntry>
                );
            }
        }

        return (
            <div className="pageContainer">
                <div className="pageTitle">Influencers</div>
                <div id="influencerEntryContainer">{entryList}</div>
            </div>
        );
    }
}

export default InfluencerPage;
