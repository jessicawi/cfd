import React from "react";
import TransactionModal from './dashboardTransactionModel';
import { Row, Col, Media, Button, Badge, Modal, Dropdown} from 'react-bootstrap';
import UpIcon from 'mdi-react/ArrowDropUpIcon';
import MoreVert from 'mdi-react/MoreVertIcon';
import CloseIcon from "mdi-react/CloseCircleIcon";
import FTNImage from "../../components/imageList";

const DashboardGrid = () => {

    const [TransactionModalShow, setTransactionModalShow] = React.useState(false);
    const showTransactionModal = () => {
        setTransactionModalShow(true);
    };
    const HideTransactionModal = () => {
        setTransactionModalShow(false);
    };
    return (
        <React.Fragment>
            <div className={"table_style  dashboardTable dashboardGrid pl-3 pr-3 "}>
                <label className={"mt-2"}>
                    <h5 className={"noMargin"}>Markets</h5>
                </label>
                <Row>
                    <Col md={4}>
                        <div className={"p-3 dashboardGrid-Item mb-3 "}>
                            <div className={"d-flex justify-content-between"}>
                                <Media as="li">
                                    <FTNImage imageName="BTC" height={40}/>
                                    <Media.Body>
                                        <strong>BTC</strong>
                                        <p className={"noMargin"}>
                                            Bitcoin
                                        </p>
                                    </Media.Body>
                                </Media>

                                <Dropdown className={"dropdownWithoutCaret liteButton"}>
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
                                    <small className={"GreenText"}>(2.76%)</small>
                                </div>
                            </div>


                                    <FTNImage imageName="Graph" height={40}/>
                            <div className={"d-flex justify-content-between mt-3"}>
                                <Button variant="primary"  onClick={showTransactionModal}>
                                    Sell <Badge variant="light">1519.63</Badge>
                                    <span className="sr-only">unread messages</span>
                                </Button>
                                <Button variant="primary"  onClick={showTransactionModal}>
                                    Buy <Badge variant="light">1519.63</Badge>
                                    <span className="sr-only">unread messages</span>
                                </Button>
                            </div>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className={"p-3 dashboardGrid-Item mb-3"}>
                            <div className={"d-flex justify-content-between"}>
                                <Media as="li">

                                    <FTNImage imageName="ETH" height={40}/>
                                    <Media.Body>
                                        <strong>ETHEREUM</strong>
                                        <p className={"noMargin"}>
                                            Ethereum
                                        </p>
                                    </Media.Body>
                                </Media>

                                <Dropdown className={"dropdownWithoutCaret liteButton"}>
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
                                    <small className={"GreenText"}>(2.76%)</small>
                                </div>
                            </div>


                                    <FTNImage imageName="Graph" height={40}/>
                            <div className={"d-flex justify-content-between mt-3"}>
                                <Button variant="primary"  onClick={showTransactionModal}>
                                    Sell <Badge variant="light">1519.63</Badge>
                                    <span className="sr-only">unread messages</span>
                                </Button>
                                <Button variant="primary"  onClick={showTransactionModal}>
                                    Buy <Badge variant="light">1519.63</Badge>
                                    <span className="sr-only">unread messages</span>
                                </Button>
                            </div>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className={"p-3 dashboardGrid-Item mb-3"}>
                            <div className={"d-flex justify-content-between"}>
                                <Media as="li">
                                    <FTNImage imageName="XRP" height={40}/>
                                    <Media.Body>
                                        <strong>XRP</strong>
                                        <p className={"noMargin"}>
                                            Ripple
                                        </p>
                                    </Media.Body>
                                </Media>

                                <Dropdown className={"dropdownWithoutCaret liteButton"}>
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
                                    <small className={"GreenText"}>(2.76%)</small>
                                </div>
                            </div>


                                    <FTNImage imageName="Graph" height={40}/>
                            <div className={"d-flex justify-content-between mt-3"}>
                                <Button variant="primary"  onClick={showTransactionModal}>
                                    Sell <Badge variant="light">1519.63</Badge>
                                    <span className="sr-only">unread messages</span>
                                </Button>
                                <Button variant="primary"  onClick={showTransactionModal}>
                                    Buy <Badge variant="light">1519.63</Badge>
                                    <span className="sr-only">unread messages</span>
                                </Button>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row className={"mt-3"}>
                    <Col md={4}>
                        <div className={"p-3 dashboardGrid-Item mb-3"}>
                            <div className={"d-flex justify-content-between"}>
                                <Media as="li">
                                    <FTNImage imageName="BCH" height={40}/>
                                    <Media.Body>
                                        <strong>BCH</strong>
                                        <p className={"noMargin"}>
                                            Bitcoin Cash
                                        </p>
                                    </Media.Body>
                                </Media>

                                <Dropdown className={"dropdownWithoutCaret liteButton"}>
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
                                    <small className={"GreenText"}>(2.76%)</small>
                                </div>
                            </div>


                                    <FTNImage imageName="Graph" height={40}/>
                            <div className={"d-flex justify-content-between mt-3"}>
                                <Button variant="primary"  onClick={showTransactionModal}>
                                    Sell <Badge variant="light">1519.63</Badge>
                                    <span className="sr-only">unread messages</span>
                                </Button>
                                <Button variant="primary"  onClick={showTransactionModal}>
                                    Buy <Badge variant="light">1519.63</Badge>
                                    <span className="sr-only">unread messages</span>
                                </Button>
                            </div>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className={"p-3 dashboardGrid-Item mb-3"}>
                            <div className={"d-flex justify-content-between"}>
                                <Media as="li">
                                    <FTNImage imageName="DASH" height={40}/>
                                    <Media.Body>
                                        <strong>DASH</strong>
                                        <p className={"noMargin"}>
                                            Dash
                                        </p>
                                    </Media.Body>
                                </Media>

                                <Dropdown className={"dropdownWithoutCaret liteButton"}>
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
                                    <small className={"GreenText"}>(2.76%)</small>
                                </div>
                            </div>


                                    <FTNImage imageName="Graph" height={40}/>
                            <div className={"d-flex justify-content-between mt-3"}>
                                <Button variant="primary"  onClick={showTransactionModal}>
                                    Sell <Badge variant="light">1519.63</Badge>
                                    <span className="sr-only">unread messages</span>
                                </Button>
                                <Button variant="primary"  onClick={showTransactionModal}>
                                    Buy <Badge variant="light">1519.63</Badge>
                                    <span className="sr-only">unread messages</span>
                                </Button>
                            </div>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className={"p-3 dashboardGrid-Item mb-3"}>
                            <div className={"d-flex justify-content-between"}>
                                <Media as="li">
                                    <FTNImage imageName="LTC" height={40}/>
                                    <Media.Body>
                                        <strong>LTC</strong>
                                        <p className={"noMargin"}>
                                            Litecoin
                                        </p>
                                    </Media.Body>
                                </Media>

                                <Dropdown className={"dropdownWithoutCaret liteButton"}>
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
                                    <small className={"GreenText"}>(2.76%)</small>
                                </div>
                            </div>


                                    <FTNImage imageName="Graph" height={40}/>
                            <div className={"d-flex justify-content-between mt-3"}>
                                <Button variant="primary"  onClick={showTransactionModal}>
                                    Sell <Badge variant="light">1519.63</Badge>
                                    <span className="sr-only">unread messages</span>
                                </Button>
                                <Button variant="primary"  onClick={showTransactionModal}>
                                    Buy <Badge variant="light">1519.63</Badge>
                                    <span className="sr-only">unread messages</span>
                                </Button>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row className={"mt-3"}>
                    <Col md={4}>
                        <div className={"p-3 dashboardGrid-Item mb-3"}>
                            <div className={"d-flex justify-content-between"}>
                                <Media as="li">

                                    <FTNImage imageName="GOLDBTC" height={40}/>
                                    <Media.Body>
                                        <strong>GOLDBTC</strong>
                                        <p className={"noMargin"}>
                                            GOLDBTC
                                        </p>
                                    </Media.Body>
                                </Media>

                                <Dropdown className={"dropdownWithoutCaret liteButton"}>
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
                                    <small className={"GreenText"}>(2.76%)</small>
                                </div>
                            </div>


                                    <FTNImage imageName="Graph" height={40}/>
                            <div className={"d-flex justify-content-between mt-3"}>
                                <Button variant="primary"  onClick={showTransactionModal}>
                                    Sell <Badge variant="light">1519.63</Badge>
                                    <span className="sr-only">unread messages</span>
                                </Button>
                                <Button variant="primary"  onClick={showTransactionModal}>
                                    Buy <Badge variant="light">1519.63</Badge>
                                    <span className="sr-only">unread messages</span>
                                </Button>
                            </div>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className={"p-3 dashboardGrid-Item mb-3"}>
                            <div className={"d-flex justify-content-between"}>
                                <Media as="li">

                                    <FTNImage imageName="ETHBTC" height={40}/>
                                    <Media.Body>
                                        <strong>ETHBTC</strong>
                                        <p className={"noMargin"}>
                                            Ethereum / Bitcoin
                                        </p>
                                    </Media.Body>
                                </Media>

                                <Dropdown className={"dropdownWithoutCaret liteButton"}>
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
                                    <small className={"GreenText"}>(2.76%)</small>
                                </div>
                            </div>


                                    <FTNImage imageName="Graph" height={40}/>
                            <div className={"d-flex justify-content-between mt-3"}>
                                <Button variant="primary"  onClick={showTransactionModal}>
                                    Sell <Badge variant="light">1519.63</Badge>
                                    <span className="sr-only">unread messages</span>
                                </Button>
                                <Button variant="primary"  onClick={showTransactionModal}>
                                    Buy <Badge variant="light">1519.63</Badge>
                                    <span className="sr-only">unread messages</span>
                                </Button>
                            </div>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className={"p-3 dashboardGrid-Item mb-3"}>
                            <div className={"d-flex justify-content-between"}>
                                <Media as="li">

                                    <FTNImage imageName="ETHGBP" height={40}/>
                                    <Media.Body>
                                        <strong>ETHGBP</strong>
                                        <p className={"noMargin"}>
                                            Ethereum / Pound
                                        </p>
                                    </Media.Body>
                                </Media>

                                <Dropdown className={"dropdownWithoutCaret liteButton"}>
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
                                    <small className={"GreenText"}>(2.76%)</small>
                                </div>
                            </div>


                                    <FTNImage imageName="Graph" height={40}/>
                            <div className={"d-flex justify-content-between mt-3"}>
                                <Button variant="primary"  onClick={showTransactionModal}>
                                    Sell <Badge variant="light">1519.63</Badge>
                                    <span className="sr-only">unread messages</span>
                                </Button>
                                <Button variant="primary"  onClick={showTransactionModal}>
                                    Buy <Badge variant="light">1519.63</Badge>
                                    <span className="sr-only">unread messages</span>
                                </Button>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row className={"mt-3"}>
                    <Col md={4}>
                        <div className={"p-3 dashboardGrid-Item mb-3"}>
                            <div className={"d-flex justify-content-between"}>
                                <Media as="li">

                                    <FTNImage imageName="GOLD" height={40}/>
                                    <Media.Body>
                                        <strong>GOLD</strong>
                                    </Media.Body>
                                </Media>

                                <Dropdown className={"dropdownWithoutCaret liteButton"}>
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
                                    <small className={"GreenText"}>(2.76%)</small>
                                </div>
                            </div>


                                    <FTNImage imageName="Graph" height={40}/>
                            <div className={"d-flex justify-content-between mt-3"}>
                                <Button variant="primary"  onClick={showTransactionModal}>
                                    Sell <Badge variant="light">1519.63</Badge>
                                    <span className="sr-only">unread messages</span>
                                </Button>
                                <Button variant="primary"  onClick={showTransactionModal}>
                                    Buy <Badge variant="light">1519.63</Badge>
                                    <span className="sr-only">unread messages</span>
                                </Button>
                            </div>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className={"p-3 dashboardGrid-Item mb-3"}>
                            <div className={"d-flex justify-content-between"}>
                                <Media as="li">

                                    <FTNImage imageName="SILVER" height={40}/>
                                    <Media.Body>
                                        <strong>SILVER</strong>
                                    </Media.Body>
                                </Media>

                                <Dropdown className={"dropdownWithoutCaret liteButton"}>
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
                                    <small className={"GreenText"}>(2.76%)</small>
                                </div>
                            </div>


                                    <FTNImage imageName="Graph" height={40}/>
                            <div className={"d-flex justify-content-between mt-3"}>
                                <Button variant="primary"  onClick={showTransactionModal}>
                                    Sell <Badge variant="light">1519.63</Badge>
                                    <span className="sr-only">unread messages</span>
                                </Button>
                                <Button variant="primary"  onClick={showTransactionModal}>
                                    Buy <Badge variant="light">1519.63</Badge>
                                    <span className="sr-only">unread messages</span>
                                </Button>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>

            <div className={"table_style dashboardTable liteButton dashboardGrid pl-3 pr-3 mt-3"}>
                <label>
                    <h5 className={"noMargin"}>Peoples</h5>
                </label>
                <Row>
                    <Col md={4} className={"p-3 m-3 dashboardGrid-Item mb-3"}>
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

                            <Dropdown className={"dropdownWithoutCaret liteButton"}>
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
                    <Col md={4} className={"p-3 m-3 dashboardGrid-Item mb-3"}>
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

                            <Dropdown className={"dropdownWithoutCaret liteButton"}>
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
                    <Col md={4} className={"p-3 m-3 dashboardGrid-Item mb-3"}>
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

                            <Dropdown className={"dropdownWithoutCaret liteButton"}>
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
                </Row>
            </div>

            <Modal centered show={TransactionModalShow} onHide={HideTransactionModal} className={'dashModel'}>
                <Modal.Body>
                    <Button variant="primary" className={'modalClose'} onClick={HideTransactionModal}> <CloseIcon/>
                    </Button>
                    <TransactionModal/>
                </Modal.Body>
            </Modal>
        </React.Fragment>
    );
};

export default DashboardGrid;
