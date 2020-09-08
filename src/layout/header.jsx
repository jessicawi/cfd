import React, {useEffect} from 'react';
import {makeStyles, useTheme} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import InputBase from "@material-ui/core/InputBase";
import Badge from "@material-ui/core/Badge";
import PageName from "./pageName";
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from "mdi-react/SearchIcon";
import EditIcon from "mdi-react/EditIcon";
import ShareIcon from "mdi-react/ShareIcon";
import NotificationsIcon from "mdi-react/NotificationsIcon";
import IconButton from '@material-ui/core/IconButton';
import {Button} from "react-bootstrap";

const TopBar = (props) => {
    const {onDrawerToggle, onShowTransactionModal} = props;
    const useStyles = makeStyles((theme) => ({
        root: {
            display: 'flex',
        },
        menuButton: {
            marginRight: theme.spacing(2),
            [theme.breakpoints.up('sm')]: {
                display: 'none',
            },
        },
        // necessary for content to be below app bar
        toolbar: theme.mixins.toolbar,
        content: {
            flexGrow: 1,
            padding: theme.spacing(3),
        },
    }));
    const classes = useStyles();

    return (
        <AppBar position="fixed" className={classes.appBar}>
            <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="start"
                    onClick={onDrawerToggle}
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
                        <IconButton onClick={() => onShowTransactionModal("Create Post")}><EditIcon/></IconButton>
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
    );

};

export default TopBar;
