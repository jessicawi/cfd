import React from "react";
import clsx from 'clsx';
import {makeStyles} from '@material-ui/core/styles';
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



const mainListItems = () => {
    return (
        <React.Fragment>
            <ListItem button>
                <ListItemIcon >
                    <DashboardIcon style={{ color: '#d1d3e0'}}/>
                </ListItemIcon>
                <ListItemText primary="Dashboard"/>
            </ListItem>
            <ListItem button>
                <ListItemIcon>
                    <ShoppingCartIcon style={{ color: '#d1d3e0'}}/>
                </ListItemIcon>
                <ListItemText primary="Orders"/>
            </ListItem>
            <ListItem button>
                <ListItemIcon>
                    <PeopleIcon style={{ color: '#d1d3e0'}}/>
                </ListItemIcon>
                <ListItemText primary="Customers"/>
            </ListItem>
            <ListItem button>
                <ListItemIcon>
                    <BarChartIcon style={{ color: '#d1d3e0'}}/>
                </ListItemIcon>
                <ListItemText primary="Reports"/>
            </ListItem>
            <ListItem button>
                <ListItemIcon>
                    <LayersIcon style={{ color: '#d1d3e0'}}/>
                </ListItemIcon>
                <ListItemText primary="Integrations"/>
            </ListItem>
        </React.Fragment>
    );
};

export default mainListItems;
