import React from "react";
import { connect } from "react-redux";
import "../public/stylesheets/MenuBar.css";
import { changePage } from "../actions";

const MenuPageTab = ({ pageClick, id, page, pageIcon, currPage }) => (
    <div>
        {currPage == id ? (
            <div className="pageTabCurrent" onClick={() => pageClick(id)}>
                {pageIcon}
                {page}
            </div>
        ) : (
            <div className="pageTab" onClick={() => pageClick(id)}>
                {pageIcon}
                {page}
            </div>
        )}
    </div>
);

const mapStateToProps = (state) => ({
    currPage: state,
});

const mapDispatchToProps = (dispatch) => ({
    pageClick: (page) => dispatch(changePage(page)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MenuPageTab);
