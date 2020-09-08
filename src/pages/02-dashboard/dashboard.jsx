import React from "react";
import Box from '@material-ui/core/Box';
import DashboardTable from './dashboardTable';
import {Dropdown, Row, Col} from 'react-bootstrap';
import "./dashboard.css";
import FilterIcon from 'mdi-react/FilterIcon';
import ViewIcon from 'mdi-react/AppsIcon';
import ListIcon from 'mdi-react/ViewListOutlineIcon';
import Settings from 'mdi-react/SettingsIcon';
import Button from "@material-ui/core/Button";
import DashboardGrid from "./dashboardgrid";

const Dashboard = () => {

    //handle Dropdown
    const [list, setList] = React.useState('Show All');
    const handleTableType = (type) => {
        setList(type);
    };

    //change list & Grid
    const [viewType, setViewType] = React.useState('list');
    const [ViewTypeIcon, setViewTypeIcon] = React.useState(<ListIcon/>);
    let [DashboardContent, setDashboardContent] = React.useState(<DashboardTable/>);

    const handleViewType = () => {
        if (viewType === "list") {
            setViewTypeIcon(<ViewIcon/>);
            setDashboardContent(<DashboardGrid/>);
            setViewType("grid");
        } else {
            setViewTypeIcon(<ListIcon/>);
            setDashboardContent(<DashboardTable/>);
            setViewType("list");

        }

        // console.log(viewType,ViewTypeIcon,DashboardContent)
    };

    return (
        <React.Fragment>
            <div className={"topBar d-flex  justify-content-between"}>
                <div className={""}>
                    <Dropdown className={"margin-15"}>
                        <Dropdown.Toggle variant="primary" id="dropdown-basic">
                            {list}
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item onClick={() => handleTableType("My Watchlist")}>My Watchlist</Dropdown.Item>
                            <Dropdown.Item onClick={() => handleTableType("Recent")}>Recent</Dropdown.Item>
                            <Dropdown.Item onClick={() => handleTableType("Show All")}>Show All</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
                <div className={" Flex flexJustifyRight"}>
                    <Dropdown className={"dropdownWithoutCaret"}>
                        <Dropdown.Toggle variant="primary" id="dropdown-basic">
                            <FilterIcon/>
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item onClick={() => handleTableType("My Watchlist")}>My Watchlist</Dropdown.Item>
                            <Dropdown.Item onClick={() => handleTableType("Recent")}>Recent</Dropdown.Item>
                            <Dropdown.Item onClick={() => handleTableType("Show All")}>Show All</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown className={"dropdownWithoutCaret"}>
                        <Dropdown.Toggle variant="primary" id="dropdown-basic">
                            <Settings/>
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item onClick={() => handleTableType("My Watchlist")}>My Watchlist</Dropdown.Item>
                            <Dropdown.Item onClick={() => handleTableType("Recent")}>Recent</Dropdown.Item>
                            <Dropdown.Item onClick={() => handleTableType("Show All")}>Show All</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown>
                        <Button variant="primary" onClick={() => handleViewType()}>{ViewTypeIcon}</Button>
                    </Dropdown>
                </div>
            </div>
            <Row>
                <Col md={"12"}>
                    {DashboardContent}
                </Col>
            </Row>
        </React.Fragment>
    );
};

export default Dashboard;
