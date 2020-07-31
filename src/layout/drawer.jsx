import React from "react";
import clsx from 'clsx';
import {fade, makeStyles} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Box from '@material-ui/core/Box';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import MainListItems from './sideMenu';
import SubListItems from './sideSecondaryMenu';
import {white} from "color-name";
import "./layout.css";
import {Avatar} from '@material-ui/core';
import {Button} from '@material-ui/core';

const DrawerLayout = () => {
    const useStyles = makeStyles((theme) => ({
        root: {
            display: 'flex',
            color: '#4c505d',
        },
        grow: {
            flexGrow: 1,
        },
        formControl: {
            minWidth: 120,
        },
        header: {
            background: "#fff"
        },
        toolbar: {
            paddingRight: 24, // keep right padding when drawer closed
        },
        toolbarIcon: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            padding: '0 8px',
            ...theme.mixins.toolbar,
            color: 'white'
        },
        search: {
            position: 'relative',
            borderRadius: theme.shape.borderRadius,
            backgroundColor: fade(theme.palette.common.white, 0.15),
            '&:hover': {
                backgroundColor: fade(theme.palette.common.white, 0.25),
            },
            marginRight: theme.spacing(2),
            marginLeft: 0,
            width: '100%',
            [theme.breakpoints.up('sm')]: {
                width: '300px',
                margin: "auto",
                display: "table"
            },
        },
        searchIcon: {
            padding: theme.spacing(0, 2),
            height: '100%',
            position: 'absolute',
            pointerEvents: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        },
        inputRoot: {
            color: 'inherit',
        },
        inputInput: {
            padding: theme.spacing(1, 1, 1, 0),
            // vertical padding + font size from searchIcon
            paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
            transition: theme.transitions.create('width'),
        },
        appBar: {
            zIndex: theme.zIndex.drawer + 1,
            transition: theme.transitions.create(['width', 'margin'], {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
            }),
        },
        appBarShift: {
            marginLeft: drawerWidth,
            width: `calc(100% - ${drawerWidth}px)`,
            transition: theme.transitions.create(['width', 'margin'], {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }),
        },
        menuButton: {
            marginRight: 36,
        },
        menuButtonHidden: {
            display: 'none',
        },
        title: {
            display: 'none',
            [theme.breakpoints.up('sm')]: {
                display: 'block',
            },
        },
        drawerPaper: {
            position: 'relative',
            whiteSpace: 'nowrap',
            width: drawerWidth,
            transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }),
            background: '#282a3c',
            color: '#d1d3e0',
        },
        drawerPaperClose: {
            overflowX: 'hidden',
            transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
            }),
            width: theme.spacing(7),
            [theme.breakpoints.up('sm')]: {
                width: theme.spacing(9),
            },
        },
        appBarSpacer: theme.mixins.toolbar,
        content: {
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
        },
        container: {
            paddingTop: theme.spacing(4),
            paddingBottom: theme.spacing(4),
        },
        paper: {
            padding: theme.spacing(2),
            display: 'flex',
            overflow: 'auto',
            flexDirection: 'column',
        },
        fixedHeight: {
            height: 240,
        },
    }));
    const drawerWidth = 240;
    const classes = useStyles();
    return (
        <Drawer
            variant="permanent"
            classes={{
                paper: clsx(classes.drawerPaper),
            }}
        >
            <div className={classes.toolbarIcon}>
                <h2 className={'Logo'}>CFD</h2>
            </div>
            <Box display="flex" className={'sideMenu-Profile'}>
                <Avatar variant="square" className={"avatarLarge"}
                        src={"https://pbs.twimg.com/profile_images/2961132879/8f4c848f586257f2cc8df7007d71c8d0.jpeg"}/>
                <Box container p={1}>
                    <Grid item xs={12}>
                        <Box><strong>Raymond Wong</strong></Box>
                        <Box mt={1} mb={1}>
                            <Button variant="contained" color="primary" disableElevation size='small'>
                                Profile
                            </Button>
                        </Box>
                    </Grid>
                </Box>
            </Box>
            <Divider/>
            <List>
                <MainListItems></MainListItems>
            </List>
            <Divider/>
            <List>
                <SubListItems></SubListItems>
            </List>
        </Drawer>
    );
};

export default DrawerLayout;
