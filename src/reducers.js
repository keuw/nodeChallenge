import { combineReducers } from "redux";
import { CHANGE_PAGE, Pages } from "./actions";

const { INFLUENCERS, DASHBOARD } = Pages;

function currentPage(state = INFLUENCERS, action) {
    switch (action.type) {
        case CHANGE_PAGE:
            return action.page;
        default:
            return state;
    }
}

export default currentPage;
