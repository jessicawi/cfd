import React from "react";
import {withRouter} from "react-router-dom";

const PageName = (props) => {
    let node = null;
    if (props.location && props.location.pathname) {
        switch (props.location.pathname) {
            case "/":
                node = "Dashboard";
                break;

            case "/feed":
                node = "Feed";
                break;
        }
    }

    return node;
};

export default withRouter(PageName);