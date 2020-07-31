import React from "react";
import {withRouter} from "react-router-dom";
import clsx from 'clsx';
import {fade, makeStyles} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Box from '@material-ui/core/Box';
import "./layout.css";
import DrawerLayout from './drawer';
import DrawerMobileLayout from './drawerMobile';
import TopBar from './topBar';
import Routes from "../routes/routes";
import 'bootstrap/dist/css/bootstrap.min.css';

const Layout = withRouter((props) => {
    const isMobile = window.innerWidth < 1025;

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
                <TopBar> </TopBar>
                <main className={classes.content}>
                    <Box height="64px"> </Box>
                    <Routes {...props}/>
                </main>
            </div>
        </React.Fragment>
    );
});

export default Layout;
