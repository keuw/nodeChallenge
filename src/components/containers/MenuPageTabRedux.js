import React from "react";
import MenuPageTab from "../MenuPageTab";
import "../public/stylesheets/MenuBar.css";

const mapStateToProps = (state) => ({
    currPage: state.currentPage,
});

const mapDispatchToProps = (dispatch) => ({
    pageClick: (page) => dispatch(changePage(page)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MenuPageTab);
