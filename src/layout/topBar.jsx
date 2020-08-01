import React from 'react';
import {Link} from "react-router-dom";
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import VisibilityIcon from 'mdi-react/VisibilityIcon';
import AmpStoriesIcon from 'mdi-react/AutoStoriesIcon';
import DashboardIcon from 'mdi-react/ViewDashboardIcon';
import ChartIcon from 'mdi-react/BarChartIcon';
import StarIcon from 'mdi-react/StarIcon';
import InvestIcon from 'mdi-react/LocalAtmIcon';
import ClubIcon from 'mdi-react/GoogleCirclesGroupIcon';
import PeopleIcon from 'mdi-react/AccountGroupIcon';
import HelpIcon from 'mdi-react/PersonHelpIcon';
import LogoutIcon from 'mdi-react/ExitToAppIcon';
import SettingsIcon from 'mdi-react/SettingsBoxIcon';
import GuideIcon from 'mdi-react/TelevisionGuideIcon';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {makeStyles, useTheme} from '@material-ui/core/styles';
import SearchIcon from "mdi-react/SearchIcon";
import InputBase from "@material-ui/core/InputBase";
import EditIcon from "mdi-react/EditIcon";
import ShareIcon from "mdi-react/ShareIcon";
import Badge from "@material-ui/core/Badge";
import NotificationsIcon from "mdi-react/NotificationsIcon";
import PageName from "./pageName";


const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    drawer: {
        [theme.breakpoints.up('sm')]: {
            width: drawerWidth,
            flexShrink: 0,
            background: '#333',
        },
    },
    appBar: {
        [theme.breakpoints.up('sm')]: {
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: drawerWidth,
        },
    },
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
        width: drawerWidth,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
}));

function ResponsiveDrawer(props) {
    const {window} = props;
    const classes = useStyles();
    const theme = useTheme();
    const [mobileOpen, setMobileOpen] = React.useState(false);
    console.log("props;", props);
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <div className={"p-3 Logo"}>
                <h4>
                    <Link to="/">CFD</Link>
                </h4>
            </div>
            <Divider/>
            <label className={"NavLabel"}>Trade</label>
            <List>
                <ListItem button key={"Watchlist"}>
                    <ListItemIcon><VisibilityIcon/></ListItemIcon>
                    <ListItemText primary={"Watchlist"}/>
                </ListItem>

                <ListItem button key={"Portfolio"}>
                    <ListItemIcon><AmpStoriesIcon/></ListItemIcon>
                    <ListItemText primary={"Portfolio"}/>
                </ListItem>

                <ListItem button key={"News Feed"} as={Link} to="/feed">
                    <ListItemIcon><DashboardIcon/></ListItemIcon>
                    <Link to="/feed">News Feed</Link>
                </ListItem>
            </List>
            <Divider className={"mt-3"}/>
            <label className={"NavLabel"}>Discover</label>

            <List>
                <ListItem button key={"Trade Markets"}>
                    <ListItemIcon><ChartIcon/></ListItemIcon>
                    <ListItemText primary={"Trade Markets"}/>
                </ListItem>

                <ListItem button key={"Copy People"}>
                    <ListItemIcon><StarIcon/></ListItemIcon>
                    <ListItemText primary={"Copy People"}/>
                </ListItem>

                <ListItem button key={"Invest in CopyPortfolios"}>
                    <ListItemIcon><InvestIcon/></ListItemIcon>
                    <ListItemText primary={"Invest in CopyPortfolios"}/>
                </ListItem>
            </List>
            <Divider/>
            <label className={"NavLabel"}>More</label>

            <List>
                <ListItem button key={"CFD Club"}>
                    <ListItemIcon><ClubIcon/></ListItemIcon>
                    <ListItemText primary={"CFD Club"}/>
                </ListItem>

                <ListItem button key={"Invite Friends"}>
                    <ListItemIcon><PeopleIcon/></ListItemIcon>
                    <ListItemText primary={"Invite Friends"}/>
                </ListItem>

                <ListItem button key={"Help"}>
                    <ListItemIcon><HelpIcon/></ListItemIcon>
                    <ListItemText primary={"Help"}/>
                </ListItem>

                <ListItem button key={"Guide"}>
                    <ListItemIcon><GuideIcon/></ListItemIcon>
                    <ListItemText primary={"Guide"}/>
                </ListItem>

                <ListItem button key={"Withdraw Funds"}>
                    <ListItemIcon>
                        <img src="data:image/svg+xml;base64,
PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMjsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSI1MTIiIGhlaWdodD0iNTEyIj48Zz48Zz4KCTxnPgoJCTxwYXRoIGQ9Ik00MzIsMEg4MEMzNS44ODgsMCwwLDM1Ljg4OCwwLDgwdjFjMCw0NC4xMTIsMzUuODg4LDgwLDgwLDgwYzAuMzM3LDAsMC42NjctMC4wMzQsMS0wLjA1MVY0MzJjMCw0NC4xMTIsMzUuODg4LDgwLDgwLDgwICAgIGgxOTFjNDQuMTEyLDAsODAtMzUuODg4LDgwLTgwYzAtMTEuMDQ2LTguOTU0LTIwLTIwLTIwYy0xMS4wNDYsMC0yMCw4Ljk1NC0yMCwyMGMwLDIyLjA1Ni0xNy45NDQsNDAtNDAsNDBIMTYxICAgIGMtMjIuMDU2LDAtNDAtMTcuOTQ0LTQwLTQwVjQwaDI3MXYyOTJjMCwxMS4wNDYsOC45NTQsMjAsMjAsMjBjMTEuMDQ2LDAsMjAtOC45NTQsMjAtMjBWMTYxYzQ0LjExMiwwLDgwLTM1Ljg4OCw4MC04MHYtMSAgICBDNTEyLDM1Ljg4OCw0NzYuMTEyLDAsNDMyLDB6IE04MSwxMjEuMDUxYy0wLjMzMy0wLjAxNy0wLjY2My0wLjA1MS0xLTAuMDUxYy0yMi4wNTYsMC00MC0xNy45NDQtNDAtNDB2LTEgICAgYzAtMjIuMDU2LDE3Ljk0NC00MCw0MC00MGgxVjEyMS4wNTF6IE00NzIsODFjMCwyMi4wNTYtMTcuOTQ0LDQwLTQwLDQwVjQwYzIyLjA1NiwwLDQwLDE3Ljk0NCw0MCw0MFY4MXoiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgc3R5bGU9ImZpbGw6I0IxQjNDMCIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiPjwvcGF0aD4KCTwvZz4KPC9nPjxnPgoJPGc+CgkJPHBhdGggZD0iTTI1Ni4xMjIsMTY1Yy01NC4wMzcsMC05OCw0MC44MjItOTgsOTFjMCw1MC4xNzgsNDMuOTYzLDkxLDk4LDkxczk4LTQwLjgyMiw5OC05MSAgICBDMzU0LjEyMiwyMDUuODIyLDMxMC4xNTksMTY1LDI1Ni4xMjIsMTY1eiBNMjU2LjEyMiwzMDdjLTMxLjk4MSwwLTU4LTIyLjg3OC01OC01MXMyNi4wMTktNTEsNTgtNTFzNTgsMjIuODc4LDU4LDUxICAgIFMyODguMTA0LDMwNywyNTYuMTIyLDMwN3oiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgc3R5bGU9ImZpbGw6I0IxQjNDMCIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiPjwvcGF0aD4KCTwvZz4KPC9nPjxnPgoJPGc+CgkJPGNpcmNsZSBjeD0iMjU3IiBjeT0iNDE1IiByPSIyMCIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgY2xhc3M9ImFjdGl2ZS1wYXRoIiBzdHlsZT0iZmlsbDojQjFCM0MwIiBkYXRhLW9sZF9jb2xvcj0iIzAwMDAwMCI+PC9jaXJjbGU+Cgk8L2c+CjwvZz48Zz4KCTxnPgoJCTxjaXJjbGUgY3g9IjI1NyIgY3k9Ijk3IiByPSIyMCIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgY2xhc3M9ImFjdGl2ZS1wYXRoIiBzdHlsZT0iZmlsbDojQjFCM0MwIiBkYXRhLW9sZF9jb2xvcj0iIzAwMDAwMCI+PC9jaXJjbGU+Cgk8L2c+CjwvZz48L2c+IDwvc3ZnPg=="/>
                    </ListItemIcon>
                    <ListItemText primary={"Withdraw Funds"}/>
                </ListItem>

                <ListItem button key={"Settings"}>
                    <ListItemIcon><SettingsIcon/></ListItemIcon>
                    <ListItemText primary={"Settings"}/>
                </ListItem>

                <ListItem button key={"Logout"}>
                    <ListItemIcon><LogoutIcon/></ListItemIcon>
                    <ListItemText primary={"Logout"}/>
                </ListItem>
            </List>

        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <div className={classes.root}>
            <CssBaseline/>
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        className={classes.menuButton}
                    >
                        <MenuIcon/>
                    </IconButton>
                    <div className={"d-flex justify-content-between container-fluid align-items-center"}>
                        <Typography variant="h6" noWrap>
                            <PageName/>
                        </Typography>
                        <div className={"AppBarSearch"}>
                            <div className={"AppBarSearchIcon"}>
                                <SearchIcon/>
                            </div>
                            <InputBase
                                placeholder="Market Search…"
                                classes={{
                                    root: classes.inputRoot,
                                    input: classes.inputInput,
                                }}
                                inputProps={{'aria-label': 'search'}}
                            />
                        </div>
                        <div className={""}>
                            <IconButton><EditIcon/></IconButton>
                            <IconButton><ShareIcon/></IconButton>
                            <IconButton color="inherit">
                                <Badge badgeContent={4} color="secondary">
                                    <NotificationsIcon/>
                                </Badge>
                            </IconButton>
                        </div>
                    </div>
                </Toolbar>
            </AppBar>
            <nav className={classes.drawer} aria-label="mailbox folders">
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Hidden smUp implementation="css">
                    <Drawer
                        container={container}
                        variant="temporary"
                        anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}
                    >
                        {drawer}
                    </Drawer>
                </Hidden>
                <Hidden xsDown implementation="css">
                    <Drawer
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        variant="permanent"
                        open
                    >
                        {drawer}
                    </Drawer>
                </Hidden>
            </nav>
        </div>
    );
}

ResponsiveDrawer.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default ResponsiveDrawer
