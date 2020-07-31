import React from "react";
import clsx from 'clsx';
import {Table, Row, Col, Media, Button, Badge, ProgressBar, Dropdown} from 'react-bootstrap';
import Thumbnail from '../../assets/150x150.png';
import Graph from '../../assets/graph.png';
import UpIcon from 'mdi-react/ArrowDropUpIcon';
import MoreVert from 'mdi-react/MoreVertIcon';

const DashboardTable = () => {

    return (
        <React.Fragment>
            <div className={"table_style dashboardTable dashboardGrid pl-3 pr-3 "}>
                <label className={"mt-2"}>
                    <h5 className={"noMargin"}>Markets</h5>
                </label>
                <Row>
                    <Col className={"p-3 m-3 dashboardGrid-Item"}>
                        <div className={"d-flex justify-content-between"}>
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

                            <Dropdown className={"dropdownWithoutCaret"}>
                                <Dropdown.Toggle variant="primary" id="dropdown-basic">
                                    <MoreVert/>
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item>Delete</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                        <div className={"d-flex justify-content-between mt-2"}>
                            <strong>Change 1D</strong>
                            <div>
                                <UpIcon className={"GreenText"}/>
                                <small>(2.76%)</small>
                            </div>
                        </div>

                        <img
                            width={"auto"}
                            height={40}
                            src={Graph}
                            className="tableGraphImage  mt-2"
                        />
                        <div className={"d-flex justify-content-between mt-3"}>
                            <Button variant="primary">
                                S <Badge variant="light">1519.63</Badge>
                                <span className="sr-only">unread messages</span>
                            </Button>
                            <Button variant="primary">
                                B <Badge variant="light">1519.63</Badge>
                                <span className="sr-only">unread messages</span>
                            </Button>
                        </div>
                    </Col>
                    <Col className={"p-3 m-3 dashboardGrid-Item"}>
                        <div className={"d-flex justify-content-between"}>
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

                            <Dropdown className={"dropdownWithoutCaret"}>
                                <Dropdown.Toggle variant="primary" id="dropdown-basic">
                                    <MoreVert/>
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item>Delete</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                        <div className={"d-flex justify-content-between mt-2"}>
                            <strong>Change 1D</strong>
                            <div>
                                <UpIcon className={"GreenText"}/>
                                <small>(2.76%)</small>
                            </div>
                        </div>

                        <img
                            width={"auto"}
                            height={40}
                            src={Graph}
                            className="tableGraphImage  mt-2"
                        />
                        <div className={"d-flex justify-content-between mt-3"}>
                            <Button variant="primary">
                                S <Badge variant="light">1519.63</Badge>
                                <span className="sr-only">unread messages</span>
                            </Button>
                            <Button variant="primary">
                                B <Badge variant="light">1519.63</Badge>
                                <span className="sr-only">unread messages</span>
                            </Button>
                        </div>
                    </Col>
                    <Col className={"p-3 m-3 dashboardGrid-Item"}>
                        <div className={"d-flex justify-content-between"}>
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

                            <Dropdown className={"dropdownWithoutCaret"}>
                                <Dropdown.Toggle variant="primary" id="dropdown-basic">
                                    <MoreVert/>
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item>Delete</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                        <div className={"d-flex justify-content-between mt-2"}>
                            <strong>Change 1D</strong>
                            <div>
                                <UpIcon className={"GreenText"}/>
                                <small>(2.76%)</small>
                            </div>
                        </div>

                        <img
                            width={"auto"}
                            height={40}
                            src={Graph}
                            className="tableGraphImage  mt-2"
                        />
                        <div className={"d-flex justify-content-between mt-3"}>
                            <Button variant="primary">
                                S <Badge variant="light">1519.63</Badge>
                                <span className="sr-only">unread messages</span>
                            </Button>
                            <Button variant="primary">
                                B <Badge variant="light">1519.63</Badge>
                                <span className="sr-only">unread messages</span>
                            </Button>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col className={"p-3 m-3 dashboardGrid-Item"}>
                        <div className={"d-flex justify-content-between"}>
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

                            <Dropdown className={"dropdownWithoutCaret"}>
                                <Dropdown.Toggle variant="primary" id="dropdown-basic">
                                    <MoreVert/>
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item>Delete</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                        <div className={"d-flex justify-content-between mt-2"}>
                            <strong>Change 1D</strong>
                            <div>
                                <UpIcon className={"GreenText"}/>
                                <small>(2.76%)</small>
                            </div>
                        </div>

                        <img
                            width={"auto"}
                            height={40}
                            src={Graph}
                            className="tableGraphImage  mt-2"
                        />
                        <div className={"d-flex justify-content-between mt-3"}>
                            <Button variant="primary">
                                S <Badge variant="light">1519.63</Badge>
                                <span className="sr-only">unread messages</span>
                            </Button>
                            <Button variant="primary">
                                B <Badge variant="light">1519.63</Badge>
                                <span className="sr-only">unread messages</span>
                            </Button>
                        </div>
                    </Col>
                    <Col className={"p-3 m-3 dashboardGrid-Item"}>
                        <div className={"d-flex justify-content-between"}>
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

                            <Dropdown className={"dropdownWithoutCaret"}>
                                <Dropdown.Toggle variant="primary" id="dropdown-basic">
                                    <MoreVert/>
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item>Delete</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                        <div className={"d-flex justify-content-between mt-2"}>
                            <strong>Change 1D</strong>
                            <div>
                                <UpIcon className={"GreenText"}/>
                                <small>(2.76%)</small>
                            </div>
                        </div>

                        <img
                            width={"auto"}
                            height={40}
                            src={Graph}
                            className="tableGraphImage  mt-2"
                        />
                        <div className={"d-flex justify-content-between mt-3"}>
                            <Button variant="primary">
                                S <Badge variant="light">1519.63</Badge>
                                <span className="sr-only">unread messages</span>
                            </Button>
                            <Button variant="primary">
                                B <Badge variant="light">1519.63</Badge>
                                <span className="sr-only">unread messages</span>
                            </Button>
                        </div>
                    </Col>
                    <Col className={"p-3 m-3 dashboardGrid-Item"}>
                        <div className={"d-flex justify-content-between"}>
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

                            <Dropdown className={"dropdownWithoutCaret"}>
                                <Dropdown.Toggle variant="primary" id="dropdown-basic">
                                    <MoreVert/>
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item>Delete</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                        <div className={"d-flex justify-content-between mt-2"}>
                            <strong>Change 1D</strong>
                            <div>
                                <UpIcon className={"GreenText"}/>
                                <small>(2.76%)</small>
                            </div>
                        </div>

                        <img
                            width={"auto"}
                            height={40}
                            src={Graph}
                            className="tableGraphImage  mt-2"
                        />
                        <div className={"d-flex justify-content-between mt-3"}>
                            <Button variant="primary">
                                S <Badge variant="light">1519.63</Badge>
                                <span className="sr-only">unread messages</span>
                            </Button>
                            <Button variant="primary">
                                B <Badge variant="light">1519.63</Badge>
                                <span className="sr-only">unread messages</span>
                            </Button>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col className={"p-3 m-3 dashboardGrid-Item"}>
                        <div className={"d-flex justify-content-between"}>
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

                            <Dropdown className={"dropdownWithoutCaret"}>
                                <Dropdown.Toggle variant="primary" id="dropdown-basic">
                                    <MoreVert/>
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item>Delete</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                        <div className={"d-flex justify-content-between mt-2"}>
                            <strong>Change 1D</strong>
                            <div>
                                <UpIcon className={"GreenText"}/>
                                <small>(2.76%)</small>
                            </div>
                        </div>

                        <img
                            width={"auto"}
                            height={40}
                            src={Graph}
                            className="tableGraphImage  mt-2"
                        />
                        <div className={"d-flex justify-content-between mt-3"}>
                            <Button variant="primary">
                                S <Badge variant="light">1519.63</Badge>
                                <span className="sr-only">unread messages</span>
                            </Button>
                            <Button variant="primary">
                                B <Badge variant="light">1519.63</Badge>
                                <span className="sr-only">unread messages</span>
                            </Button>
                        </div>
                    </Col>
                    <Col className={"p-3 m-3 dashboardGrid-Item"}>
                        <div className={"d-flex justify-content-between"}>
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

                            <Dropdown className={"dropdownWithoutCaret"}>
                                <Dropdown.Toggle variant="primary" id="dropdown-basic">
                                    <MoreVert/>
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item>Delete</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                        <div className={"d-flex justify-content-between mt-2"}>
                            <strong>Change 1D</strong>
                            <div>
                                <UpIcon className={"GreenText"}/>
                                <small>(2.76%)</small>
                            </div>
                        </div>

                        <img
                            width={"auto"}
                            height={40}
                            src={Graph}
                            className="tableGraphImage  mt-2"
                        />
                        <div className={"d-flex justify-content-between mt-3"}>
                            <Button variant="primary">
                                S <Badge variant="light">1519.63</Badge>
                                <span className="sr-only">unread messages</span>
                            </Button>
                            <Button variant="primary">
                                B <Badge variant="light">1519.63</Badge>
                                <span className="sr-only">unread messages</span>
                            </Button>
                        </div>
                    </Col>
                    <Col className={"p-3 m-3 dashboardGrid-Item"}>
                        <div className={"d-flex justify-content-between"}>
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

                            <Dropdown className={"dropdownWithoutCaret"}>
                                <Dropdown.Toggle variant="primary" id="dropdown-basic">
                                    <MoreVert/>
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item>Delete</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                        <div className={"d-flex justify-content-between mt-2"}>
                            <strong>Change 1D</strong>
                            <div>
                                <UpIcon className={"GreenText"}/>
                                <small>(2.76%)</small>
                            </div>
                        </div>

                        <img
                            width={"auto"}
                            height={40}
                            src={Graph}
                            className="tableGraphImage  mt-2"
                        />
                        <div className={"d-flex justify-content-between mt-3"}>
                            <Button variant="primary">
                                S <Badge variant="light">1519.63</Badge>
                                <span className="sr-only">unread messages</span>
                            </Button>
                            <Button variant="primary">
                                B <Badge variant="light">1519.63</Badge>
                                <span className="sr-only">unread messages</span>
                            </Button>
                        </div>
                    </Col>
                </Row>
            </div>

            <div className={"table_style dashboardTable dashboardGrid pl-3 pr-3"}>
                <label>
                    <h5 className={"noMargin"}>Peoples</h5>
                </label>
                <Row>
                    <Col className={"p-3 m-3 dashboardGrid-Item"}>
                        <div className={"d-flex justify-content-between"}>
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

                            <Dropdown className={"dropdownWithoutCaret"}>
                                <Dropdown.Toggle variant="primary" id="dropdown-basic">
                                    <MoreVert/>
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item>Delete</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                        <div className={"d-flex justify-content-between mt-3"}>
                            <div>
                                <h4 className={"noMargin GreenText"}>41.21</h4>
                                <small>RETURN (1M)</small>
                            </div>
                            <div className={"d-flex flex-column justify-content-center"}>
                            <span className={"squareBorderText m-auto"}>
                                            5
                                        </span>
                                <small>RISK</small>
                            </div>
                        </div>
                        <div className={"d-flex mt-3"}>
                            <Button variant="success" className={"container-fluid"}>
                                INVEST
                            </Button>
                        </div>
                        <div className={"d-flex justify-content-between mt-2"}>
                            <span>2114 COPIERS</span>
                            <div>
                            <UpIcon className={"GreenText"}/>
                            <small className={"GreenText"}>(2.76%)</small>
                            </div>
                        </div>
                    </Col>
                    <Col className={"p-3 m-3 dashboardGrid-Item"}>
                        <div className={"d-flex justify-content-between"}>
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

                            <Dropdown className={"dropdownWithoutCaret"}>
                                <Dropdown.Toggle variant="primary" id="dropdown-basic">
                                    <MoreVert/>
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item>Delete</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                        <div className={"d-flex justify-content-between mt-2"}>
                            <div>
                                <h4 className={"noMargin GreenText"}>41.21</h4>
                                <small>RETURN (1M)</small>
                            </div>
                            <div className={"d-flex flex-column justify-content-center"}>
                            <span className={"squareBorderText m-auto"}>
                                            5
                                        </span>
                                <small>RISK</small>
                            </div>
                        </div>
                        <div className={"d-flex justify-content-between container-fluid mt-3"}>
                            <Button variant="success" className={"flex-1"}>
                                INVEST
                            </Button>
                        </div>
                        <div>
                            <span>2114 COPIERS</span>
                            <UpIcon className={"GreenText"}/>
                            <small className={"GreenText"}>(2.76%)</small>
                        </div>
                    </Col>
                    <Col className={"p-3 m-3 dashboardGrid-Item"}>
                        <div className={"d-flex justify-content-between"}>
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

                            <Dropdown className={"dropdownWithoutCaret"}>
                                <Dropdown.Toggle variant="primary" id="dropdown-basic">
                                    <MoreVert/>
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item>Delete</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                        <div className={"d-flex justify-content-between mt-2"}>
                            <div>
                                <h4 className={"noMargin GreenText"}>41.21</h4>
                                <small>RETURN (1M)</small>
                            </div>
                            <div className={"d-flex flex-column justify-content-center"}>
                            <span className={"squareBorderText m-auto"}>
                                            5
                                        </span>
                                <small>RISK</small>
                            </div>
                        </div>
                        <div className={"d-flex justify-content-between container-fluid mt-3"}>
                            <Button variant="success" className={"flex-1"}>
                                INVEST
                            </Button>
                        </div>
                        <div>
                            <span>2114 COPIERS</span>
                            <UpIcon className={"GreenText"}/>
                            <small className={"GreenText"}>(2.76%)</small>
                        </div>
                    </Col>
                </Row>
            </div>
        </React.Fragment>
    );
};

export default DashboardTable;
