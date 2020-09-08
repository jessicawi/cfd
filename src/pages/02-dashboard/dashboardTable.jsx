import React from "react";
import {Table, Modal, Media, Button, Badge, ProgressBar, Dropdown} from 'react-bootstrap';
import UpIcon from 'mdi-react/ArrowDropUpIcon';
import DownIcon from 'mdi-react/ArrowDropDownIcon';
import AddIcon from 'mdi-react/AddBoxIcon';
import Slider from '@material-ui/core/Slider';
import Box from '@material-ui/core/Box';
import MoreVert from 'mdi-react/MoreVertIcon';
import CloseIcon from "mdi-react/CloseCircleIcon";
import TransactionModal from './dashboardTransactionModel';
import FTNImage from "../../components/imageList";

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

    const [TransactionModalShow, setTransactionModalShow] = React.useState(false);
    const showTransactionModal = () => {
        setTransactionModalShow(true);
    };
    const HideTransactionModal = () => {
        setTransactionModalShow(false);
    };
    return (
        <React.Fragment>
            <div className={"table_style dashboardTable"}>
                <Table hover responsive>
                    <thead>
                    <tr>
                        <th style={{width: 15 + '%'}}>Crypto</th>
                        <th style={{width: 25 + '%'}}>Change</th>
                        <th style={{width: 10 + '%'}}>Sell</th>
                        <th style={{width: 10 + '%'}}>Buy</th>
                        <th style={{width: 20 + '%'}}>Range</th>
                        <th style={{width: 20 + '%'}}>Sentiment</th>
                        <th/>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>
                            <Media as="li">
                                <FTNImage imageName="BTC" height={40}/>
                                <Media.Body>
                                    <strong>BTC</strong>
                                    <p className={"noMargin"}>
                                        Bitcoin
                                    </p>
                                </Media.Body>
                            </Media>
                        </td>
                        <td>
                            <div className={"Flex"}>
                                <UpIcon className={"GreenText"}/>
                                <div>
                                    <h6 className={"noMargin GreenText"}>41.21</h6>
                                    <small className={"GreenText"}>(2.76%)</small>
                                </div>
                                <FTNImage imageName="Graph" height={40}/>
                            </div>
                        </td>
                        <td>
                            <Button variant="primary"  onClick={showTransactionModal}>
                                S <Badge variant="light">1519.63</Badge>
                                <span className="sr-only">unread messages</span>
                            </Button>
                        </td>
                        <td>
                            <Button variant="primary"  onClick={showTransactionModal}>
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
                                <FTNImage imageName="ETH" height={40}/>
                                <Media.Body>
                                    <strong>ETHEREUM</strong>
                                    <p className={"noMargin"}>
                                        Ethereum
                                    </p>
                                </Media.Body>
                            </Media>
                        </td>
                        <td>
                            <div className={"Flex"}>
                                <DownIcon className={"RedText"}/>
                                <div>
                                    <h6 className={"noMargin RedText"}>41.21</h6>
                                    <small className={"RedText"}>(2.76%)</small>
                                </div>
                                <FTNImage imageName="decGraph" height={40}/>
                            </div>
                        </td>
                        <td>
                            <Button variant="primary"  onClick={showTransactionModal}>
                                S <Badge variant="light">1519.63</Badge>
                                <span className="sr-only">unread messages</span>
                            </Button>
                        </td>
                        <td>
                            <Button variant="primary"  onClick={showTransactionModal}>
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
                                <FTNImage imageName="XRP" height={40}/>
                                <Media.Body>
                                    <strong>XRP</strong>
                                    <p className={"noMargin"}>
                                        Ripple
                                    </p>
                                </Media.Body>
                            </Media>
                        </td>
                        <td>
                            <div className={"Flex"}>
                                <UpIcon className={"GreenText"}/>
                                <div>
                                    <h6 className={"noMargin GreenText"}>41.21</h6>
                                    <small className={"GreenText"}>(2.76%)</small>
                                </div>
                                <FTNImage imageName="Graph" height={40}/>
                            </div>
                        </td>
                        <td>
                            <Button variant="primary"  onClick={showTransactionModal}>
                                S <Badge variant="light">1519.63</Badge>
                                <span className="sr-only">unread messages</span>
                            </Button>
                        </td>
                        <td>
                            <Button variant="primary"  onClick={showTransactionModal}>
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
                                <FTNImage imageName="BCH" height={40}/>
                                <Media.Body>
                                    <strong>BCH</strong>
                                    <p className={"noMargin"}>
                                        Bitcoin Cash
                                    </p>
                                </Media.Body>
                            </Media>
                        </td>
                        <td>
                            <div className={"Flex"}>
                                <UpIcon className={"GreenText"}/>
                                <div>
                                    <h6 className={"noMargin GreenText"}>41.21</h6>
                                    <small className={"GreenText"}>(2.76%)</small>
                                </div>
                                <FTNImage imageName="Graph" height={40}/>
                            </div>
                        </td>
                        <td>
                            <Button variant="primary"  onClick={showTransactionModal}>
                                S <Badge variant="light">1519.63</Badge>
                                <span className="sr-only">unread messages</span>
                            </Button>
                        </td>
                        <td>
                            <Button variant="primary"  onClick={showTransactionModal}>
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
                                <FTNImage imageName="DASH" height={40}/>
                                <Media.Body>
                                    <strong>DASH</strong>
                                    <p className={"noMargin"}>
                                        Dash
                                    </p>
                                </Media.Body>
                            </Media>
                        </td>
                        <td>
                            <div className={"Flex"}>
                                <UpIcon className={"GreenText"}/>
                                <div>
                                    <h6 className={"noMargin GreenText"}>41.21</h6>
                                    <small className={"GreenText"}>(2.76%)</small>
                                </div>
                                <FTNImage imageName="Graph" height={40}/>
                            </div>
                        </td>
                        <td>
                            <Button variant="primary"  onClick={showTransactionModal}>
                                S <Badge variant="light">1519.63</Badge>
                                <span className="sr-only">unread messages</span>
                            </Button>
                        </td>
                        <td>
                            <Button variant="primary"  onClick={showTransactionModal}>
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
                                <FTNImage imageName="LTC" height={40}/>
                                <Media.Body>
                                    <strong>LTC</strong>
                                    <p className={"noMargin"}>
                                        Litecoin
                                    </p>
                                </Media.Body>
                            </Media>
                        </td>
                        <td>
                            <div className={"Flex"}>
                                <UpIcon className={"GreenText"}/>
                                <div>
                                    <h6 className={"noMargin GreenText"}>41.21</h6>
                                    <small className={"GreenText"}>(2.76%)</small>
                                </div>
                                <FTNImage imageName="Graph" height={40}/>
                            </div>
                        </td>
                        <td>
                            <Button variant="primary"  onClick={showTransactionModal}>
                                S <Badge variant="light">1519.63</Badge>
                                <span className="sr-only">unread messages</span>
                            </Button>
                        </td>
                        <td>
                            <Button variant="primary"  onClick={showTransactionModal}>
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
                                <FTNImage imageName="GOLDBTC" height={40}/>
                                <Media.Body>
                                    <strong>GOLDBTC</strong>
                                    <p className={"noMargin"}>
                                        GOLDBTC
                                    </p>
                                </Media.Body>
                            </Media>
                        </td>
                        <td>
                            <div className={"Flex"}>
                                <UpIcon className={"GreenText"}/>
                                <div>
                                    <h6 className={"noMargin GreenText"}>41.21</h6>
                                    <small className={"GreenText"}>(2.76%)</small>
                                </div>
                                <FTNImage imageName="Graph" height={40}/>
                            </div>
                        </td>
                        <td>
                            <Button variant="primary"  onClick={showTransactionModal}>
                                S <Badge variant="light">1519.63</Badge>
                                <span className="sr-only">unread messages</span>
                            </Button>
                        </td>
                        <td>
                            <Button variant="primary"  onClick={showTransactionModal}>
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
                                <FTNImage imageName="ETHBTC" height={40}/>
                                <Media.Body>
                                    <strong>ETHBTC</strong>
                                    <p className={"noMargin"}>
                                        Ethereum / Bitcoin
                                    </p>
                                </Media.Body>
                            </Media>
                        </td>
                        <td>
                            <div className={"Flex"}>
                                <UpIcon className={"GreenText"}/>
                                <div>
                                    <h6 className={"noMargin GreenText"}>41.21</h6>
                                    <small className={"GreenText"}>(2.76%)</small>
                                </div>
                                <FTNImage imageName="Graph" height={40}/>
                            </div>
                        </td>
                        <td>
                            <Button variant="primary"  onClick={showTransactionModal}>
                                S <Badge variant="light">1519.63</Badge>
                                <span className="sr-only">unread messages</span>
                            </Button>
                        </td>
                        <td>
                            <Button variant="primary"  onClick={showTransactionModal}>
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
                                <FTNImage imageName="ETHGBP" height={40}/>
                                <Media.Body>
                                    <strong>ETHGBP</strong>
                                    <p className={"noMargin"}>
                                        Ethereum / Pound
                                    </p>
                                </Media.Body>
                            </Media>
                        </td>
                        <td>
                            <div className={"Flex"}>
                                <UpIcon className={"GreenText"}/>
                                <div>
                                    <h6 className={"noMargin GreenText"}>41.21</h6>
                                    <small className={"GreenText"}>(2.76%)</small>
                                </div>
                                <FTNImage imageName="Graph" height={40}/>
                            </div>
                        </td>
                        <td>
                            <Button variant="primary"  onClick={showTransactionModal}>
                                S <Badge variant="light">1519.63</Badge>
                                <span className="sr-only">unread messages</span>
                            </Button>
                        </td>
                        <td>
                            <Button variant="primary"  onClick={showTransactionModal}>
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
                                <FTNImage imageName="SILVER" height={40}/>
                                <Media.Body>
                                    <strong>SILVER</strong>
                                    <p className={"noMargin"}>
                                        Silver
                                    </p>
                                </Media.Body>
                            </Media>
                        </td>
                        <td>
                            <div className={"Flex"}>
                                <UpIcon className={"GreenText"}/>
                                <div>
                                    <h6 className={"noMargin GreenText"}>41.21</h6>
                                    <small className={"GreenText"}>(2.76%)</small>
                                </div>
                                <FTNImage imageName="Graph" height={40}/>
                            </div>
                        </td>
                        <td>
                            <Button variant="primary"  onClick={showTransactionModal}>
                                S <Badge variant="light">1519.63</Badge>
                                <span className="sr-only">unread messages</span>
                            </Button>
                        </td>
                        <td>
                            <Button variant="primary"  onClick={showTransactionModal}>
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
                                <FTNImage imageName="GOLD" height={40}/>
                                <Media.Body>
                                    <strong>GOLD</strong>
                                    <p className={"noMargin"}>
                                        Gold
                                    </p>
                                </Media.Body>
                            </Media>
                        </td>
                        <td>
                            <div className={"Flex"}>
                                <UpIcon className={"GreenText"}/>
                                <div>
                                    <h6 className={"noMargin GreenText"}>41.21</h6>
                                    <small className={"GreenText"}>(2.76%)</small>
                                </div>
                                <FTNImage imageName="Graph" height={40}/>
                            </div>
                        </td>
                        <td>
                            <Button variant="primary"  onClick={showTransactionModal}>
                                S <Badge variant="light">1519.63</Badge>
                                <span className="sr-only">unread messages</span>
                            </Button>
                        </td>
                        <td>
                            <Button variant="primary"  onClick={showTransactionModal}>
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
                        <td colSpan="7">
                            <Button variant="secondary" className={"m-auto d-block"}><AddIcon/> Add Crypto</Button>
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
                        <th/>
                        <th>Investors</th>
                        <th/>
                        <th style={{width: 10 + 'px'}}/>
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
                                <h6 className={"noMargin GreenText"}>41.21</h6>
                                <small className={"GreenText"}>(2.76%)</small>
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
                                <h6 className={"noMargin GreenText"}>41.21</h6>
                                <small className={"GreenText"}>(2.76%)</small>
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
                                <h6 className={"noMargin GreenText"}>41.21</h6>
                                <small className={"GreenText"}>(2.76%)</small>
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
                        <td colSpan="7">
                            <Button variant="secondary" className={"m-auto d-block"}><AddIcon/> Discover People</Button>
                        </td>
                    </tr>
                    </tbody>
                </Table>
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

export default DashboardTable;
