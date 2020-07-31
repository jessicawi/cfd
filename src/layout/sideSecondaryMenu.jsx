import React from "react";
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';
import AssignmentIcon from '@material-ui/icons/Assignment';
import Layout from "./layout";

const subListItems = () => {
    return(
        <React.Fragment>
            <ListSubheader inset style={{ color: '#d1d3e0'}}>Saved reports</ListSubheader>
            <ListItem button>
                <ListItemIcon>
                    <AssignmentIcon style={{ color: '#d1d3e0'}}/>
                </ListItemIcon>
                <ListItemText primary="Current month"/>
            </ListItem>
            <ListItem button>
                <ListItemIcon>
                    <AssignmentIcon style={{ color: '#d1d3e0'}}/>
                </ListItemIcon>
                <ListItemText primary="Last quarter"/>
            </ListItem>
            <ListItem button>
                <ListItemIcon>
                    <AssignmentIcon style={{ color: '#d1d3e0'}}/>
                </ListItemIcon>
                <ListItemText primary="Year-end sale"/>
            </ListItem>
        </React.Fragment>
    );
};

export default subListItems;
