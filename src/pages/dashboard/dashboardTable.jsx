import React from "react";
import clsx from 'clsx';
import {Table, Row, Col, Media, Button, Badge, ProgressBar, Dropdown} from 'react-bootstrap';
import Thumbnail from '../../assets/150x150.png';
import Graph from '../../assets/graph.png';
import UpIcon from 'mdi-react/ArrowDropUpIcon';
import Slider from '@material-ui/core/Slider';
import Box from '@material-ui/core/Box';
import MoreVert from 'mdi-react/MoreVertIcon';

const marks = [
    {
        value: 10,
        label: '210',
    },
    {
        value: 90,
        label: '1788',
    },
];

const DashboardTable = () => {

    return (
        <React.Fragment>
                    <div className={"table_style dashboardTable"}>
                        <Table hover responsive>
                            <thead>
                            <tr>
                                <th style={{width: 15 + '%'}}>Markets</th>
                                <th style={{width: 25 + '%'}}>Change</th>
                                <th style={{width: 10 + '%'}}>Sell</th>
                                <th style={{width: 10 + '%'}}>Buy</th>
                                <th style={{width: 20 + '%'}}>Range</th>
                                <th style={{width: 20 + '%'}}>Sentiment</th>
                                <th></th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>
                                    <Media as="li">
                                        <img
                                            width={40}
                                            height={40}
                                            className="mr-3"
                                            src={Thumbnail}
                                            alt="Generic placeholder"
                                        />
                                        <Media.Body>
                                            <strong>TSLA</strong>
                                            <p className={"noMargin"}>
                                                Tela Motors...
                                            </p>
                                        </Media.Body>
                                    </Media>
                                </td>
                                <td>
                                    <div className={"Flex"}>
                                        <UpIcon className={"GreenText"}/>
                                        <div>
                                            <h6 className={"noMargin"}>41.21</h6>
                                            <small>(2.76%)</small>
                                        </div>
                                        <img
                                            width={"auto"}
                                            height={40}
                                            src={Graph}
                                            class="tableGraphImage"
                                        />
                                    </div>
                                </td>
                                <td>
                                    <Button variant="primary">
                                        S <Badge variant="light">1519.63</Badge>
                                        <span className="sr-only">unread messages</span>
                                    </Button>
                                </td>
                                <td>
                                    <Button variant="primary">
                                        B <Badge variant="light">1519.63</Badge>
                                        <span className="sr-only">unread messages</span>
                                    </Button>
                                </td>
                                <td>
                                    <Slider
                                        track="inverted"
                                        aria-labelledby="track-inverted-range-slider"
                                        defaultValue={[10, 90]}
                                        marks={marks}
                                    />
                                </td>
                                <td>
                                    <ProgressBar now={60}/>
                                    <Box mt={1}>60% Buying Now</Box>
                                </td>
                                <td>
                                    <Dropdown className={"dropdownWithoutCaret"}>
                                        <Dropdown.Toggle variant="primary" id="dropdown-basic">
                                            <MoreVert/>
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu>
                                            <Dropdown.Item>Delete</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <Media as="li">
                                        <img
                                            width={40}
                                            height={40}
                                            className="mr-3"
                                            src={Thumbnail}
                                            alt="Generic placeholder"
                                        />
                                        <Media.Body>
                                            <strong>TSLA</strong>
                                            <p className={"noMargin"}>
                                                Tela Motors...
                                            </p>
                                        </Media.Body>
                                    </Media>
                                </td>
                                <td>
                                    <div className={"Flex"}>
                                        <UpIcon className={"GreenText"}/>
                                        <div>
                                            <h6 className={"noMargin"}>41.21</h6>
                                            <small>(2.76%)</small>
                                        </div>
                                        <img
                                            width={"auto"}
                                            height={40}
                                            src={Graph}
                                            className="tableGraphImage"
                                        />
                                    </div>
                                </td>
                                <td>
                                    <Button variant="primary">
                                        S <Badge variant="light">1519.63</Badge>
                                        <span className="sr-only">unread messages</span>
                                    </Button>
                                </td>
                                <td>
                                    <Button variant="primary">
                                        B <Badge variant="light">1519.63</Badge>
                                        <span className="sr-only">unread messages</span>
                                    </Button>
                                </td>
                                <td>
                                    <Slider
                                        track="inverted"
                                        aria-labelledby="track-inverted-range-slider"
                                        defaultValue={[10, 90]}
                                        marks={marks}
                                    />
                                </td>
                                <td>
                                    <ProgressBar now={60}/>
                                    <Box mt={1}>60% Buying Now</Box>
                                </td>
                                <td>
                                    <Dropdown className={"dropdownWithoutCaret"}>
                                        <Dropdown.Toggle variant="primary" id="dropdown-basic">
                                            <MoreVert/>
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu>
                                            <Dropdown.Item>Delete</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <Media as="li">
                                        <img
                                            width={40}
                                            height={40}
                                            className="mr-3"
                                            src={Thumbnail}
                                            alt="Generic placeholder"
                                        />
                                        <Media.Body>
                                            <strong>TSLA</strong>
                                            <p className={"noMargin"}>
                                                Tela Motors...
                                            </p>
                                        </Media.Body>
                                    </Media>
                                </td>
                                <td>
                                    <div className={"Flex"}>
                                        <UpIcon className={"GreenText"}/>
                                        <div>
                                            <h6 className={"noMargin"}>41.21</h6>
                                            <small>(2.76%)</small>
                                        </div>
                                        <img
                                            width={"auto"}
                                            height={40}
                                            src={Graph}
                                            className="tableGraphImage"
                                        />
                                    </div>
                                </td>
                                <td>
                                    <Button variant="primary">
                                        S <Badge variant="light">1519.63</Badge>
                                        <span className="sr-only">unread messages</span>
                                    </Button>
                                </td>
                                <td>
                                    <Button variant="primary">
                                        B <Badge variant="light">1519.63</Badge>
                                        <span className="sr-only">unread messages</span>
                                    </Button>
                                </td>
                                <td>
                                    <Slider
                                        track="inverted"
                                        aria-labelledby="track-inverted-range-slider"
                                        defaultValue={[10, 90]}
                                        marks={marks}
                                    />
                                </td>
                                <td>
                                    <ProgressBar now={60}/>
                                    <Box mt={1}>60% Buying Now</Box>
                                </td>
                                <td>
                                    <Dropdown className={"dropdownWithoutCaret"}>
                                        <Dropdown.Toggle variant="primary" id="dropdown-basic">
                                            <MoreVert/>
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu>
                                            <Dropdown.Item>Delete</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </td>
                            </tr>
                            </tbody>
                        </Table>
                        <Table hover responsive>
                            <thead>
                            <tr>
                                <th>Peoples</th>
                                <th>Change</th>
                                <th>Risk Score</th>
                                <th></th>
                                <th>Investors</th>
                                <th></th>
                                <th style={{width: 10 + 'px'}}></th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>
                                    <Media as="li">
                                        <img
                                            width={40}
                                            height={40}
                                            className="mr-3"
                                            src={"https://pbs.twimg.com/profile_images/2961132879/8f4c848f586257f2cc8df7007d71c8d0.jpeg"}
                                            alt="Generic placeholder"
                                        />
                                        <Media.Body>
                                            <strong>Oliver Danvel</strong>
                                            <p className={"noMargin"}>
                                                Oliver Jean Anne
                                            </p>
                                        </Media.Body>
                                    </Media>
                                </td>
                                <td>
                                    <div className={"Flex"}>
                                        <div>
                                            <h6 className={"GreenText"}>41.21%</h6>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div className={"Flex"}>
                                        <span className={"squareBorderText mr-15"}>
                                            5
                                        </span>
                                        <Button variant="success">
                                            INVEST
                                        </Button>
                                    </div>
                                </td>
                                <td>
                                </td>
                                <td className={"Flex"}>
                                    <UpIcon className={"GreenText"}/>
                                    <div>
                                        <h6 className={"noMargin"}>41.21</h6>
                                        <small>(2.76%)</small>
                                    </div>
                                </td>
                                <td>
                                    <h6><strong>2114</strong> Copiers</h6>
                                </td>
                                <td>
                                    <Dropdown className={"dropdownWithoutCaret"}>
                                        <Dropdown.Toggle variant="primary" id="dropdown-basic">
                                            <MoreVert/>
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu>
                                            <Dropdown.Item>Delete</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <Media as="li">
                                        <img
                                            width={40}
                                            height={40}
                                            className="mr-3"
                                            src={"https://pbs.twimg.com/profile_images/2961132879/8f4c848f586257f2cc8df7007d71c8d0.jpeg"}
                                            alt="Generic placeholder"
                                        />
                                        <Media.Body>
                                            <strong>Oliver Danvel</strong>
                                            <p className={"noMargin"}>
                                                Oliver Jean Anne
                                            </p>
                                        </Media.Body>
                                    </Media>
                                </td>
                                <td>
                                    <div className={"Flex"}>
                                        <div>
                                            <h6 className={"GreenText"}>41.21%</h6>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div className={"Flex"}>
                                        <span className={"squareBorderText mr-15"}>
                                            5
                                        </span>
                                        <Button variant="primary">
                                            COPY
                                        </Button>
                                    </div>
                                </td>
                                <td>
                                </td>
                                <td className={"Flex"}>
                                    <UpIcon className={"GreenText"}/>
                                    <div>
                                        <h6 className={"noMargin"}>41.21</h6>
                                        <small>(2.76%)</small>
                                    </div>
                                </td>
                                <td>
                                    <h6><strong>2114</strong> Copiers</h6>
                                </td>
                                <td>
                                    <Dropdown className={"dropdownWithoutCaret"}>
                                        <Dropdown.Toggle variant="primary" id="dropdown-basic">
                                            <MoreVert/>
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu>
                                            <Dropdown.Item>Delete</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <Media as="li">
                                        <img
                                            width={40}
                                            height={40}
                                            className="mr-3"
                                            src={"https://pbs.twimg.com/profile_images/2961132879/8f4c848f586257f2cc8df7007d71c8d0.jpeg"}
                                            alt="Generic placeholder"
                                        />
                                        <Media.Body>
                                            <strong>Oliver Danvel</strong>
                                            <p className={"noMargin"}>
                                                Oliver Jean Anne
                                            </p>
                                        </Media.Body>
                                    </Media>
                                </td>
                                <td>
                                    <div className={"Flex"}>
                                        <div>
                                            <h6 className={"GreenText"}>41.21%</h6>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div className={"Flex"}>
                                        <span className={"squareBorderText mr-15"}>
                                            5
                                        </span>
                                        <Button variant="primary">
                                            COPY
                                        </Button>
                                    </div>
                                </td>
                                <td>
                                </td>
                                <td className={"Flex"}>
                                    <UpIcon className={"GreenText"}/>
                                    <div>
                                        <h6 className={"noMargin"}>41.21</h6>
                                        <small>(2.76%)</small>
                                    </div>
                                </td>
                                <td>
                                    <h6><strong>2114</strong> Copiers</h6>
                                </td>
                                <td>
                                    <Dropdown className={"dropdownWithoutCaret"}>
                                        <Dropdown.Toggle variant="primary" id="dropdown-basic">
                                            <MoreVert/>
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu>
                                            <Dropdown.Item>Delete</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </td>
                            </tr>
                            </tbody>
                        </Table>
                    </div>
        </React.Fragment>
    );
};

export default DashboardTable;
