import React from "react";
import {withRouter} from "react-router-dom";
import {makeStyles} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import "./layout.css";
import Routes from "../routes/routes";
import 'bootstrap/dist/css/bootstrap.min.css';
import TopBar from "./topBar";
import {Col} from "react-bootstrap";

const Layout = withRouter((props) => {
    // const isMobile = window.innerWidth < 1025;

    const useStyles = makeStyles((theme) => ({
        root: {
            display: 'flex',
            color: '#4c505d',
        },
        content: {
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
        },
    }));
    const classes = useStyles();

    return (
        <React.Fragment>
            <div className={classes.root}>
                <CssBaseline/>
                <main className={[classes.content]}>
                    <TopBar/>
                    <div className="Content">
                        <Routes {...props}/>
                    </div>
                </main>
            </div>
        </React.Fragment>
    );
});

export default Layout;
