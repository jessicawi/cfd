import React, {useEffect, useState} from "react";
import {Dropdown, Row, Col, Media, Card, Button, Form, OverlayTrigger, Popover, Tabs, Tab, Modal} from 'react-bootstrap';
import Container from "@material-ui/core/Container";
import UpIcon from 'mdi-react/ArrowDropUpIcon';
import DownIcon from '@material-ui/icons/ArrowDropDown';
import FileEyeIcon from 'mdi-react/FileEyeIcon';
import ChartPieIcon from 'mdi-react/ChartPieIcon';
import './feed.css';
import FTNImage from "../../components/imageList";
import Datasource from '../../data/datasource';
import moment from 'moment';
import CloseIcon from "mdi-react/CloseCircleIcon";
import CircularProgress from '@material-ui/core/CircularProgress';
import CopyModal from '../../components/transactionModal/copyModal';
import Snackbar from '@material-ui/core/Snackbar';

const FeedList = () => {
    //handle Dropdown
    const [list, setList] = React.useState('News Feed');
    const [WatchlistList, setWatchlistList] = React.useState('My Watchlist');
    const [PortfolioList, setPortfolioList] = React.useState('Top Gainers');
    const [articleList, setArticleList] = useState([]);
    const [isLoading, setIsLoading] = React.useState(false);
    const [TransactionModalShow, setTransactionModalShow] = React.useState(false);
    const [copyData, setCopyData] = React.useState([]);
    const [notification, setNotification] = React.useState({
        open: false,
        message: ''
    });
    const showModal = (data) => {
        setTransactionModalShow(true);
        setCopyData(data);
    };
    const hideModal = () => {
        setTransactionModalShow(false);
    };

    const getArticleList = async () => {
        setIsLoading(true);
        const response = await Datasource.shared.getArticleList();
        if (response && response.Data) {
            const data = response.Data.ItemList;

            let index = 0;
            for (const item of data) {
                const response = await Datasource.shared.postTeam('', item.MemberID);
                let teamArray = response.Data.ItemList;
                if (item.ImageFilePath1) {
                    item.ImageFilePath1 = 'https://tdmxapi.bclg.in' + item.ImageFilePath1.substr(1);
                }
                if (item.ImageFilePath2) {
                    item.ImageFilePath2 = 'https://tdmxapi.bclg.in' + item.ImageFilePath2.substr(1);
                }
                if (item.ImageFilePath3) {
                    item.ImageFilePath3 = 'https://tdmxapi.bclg.in' + item.ImageFilePath3.substr(1);
                }
                if (item.MarketImageFilePath1) {
                    item.MarketImageFilePath1 = 'https://tdmxapi.bclg.in' + item.MarketImageFilePath1.substr(1);
                }
                const member = teamArray.find(d => d.MemberID === item.MemberID);
                if (member) {
                    item.name = member.LoginName;
                } else {
                    item.name = 'User';
                }
                index++;
            }
            setArticleList(data);
        }
        setIsLoading(false);
    };

    useEffect(() => {
        getArticleList();
    }, []);
    console.log(articleList);

    function Loading() {
        if (isLoading) {
            return (
                <div style={{display: 'table', margin: '20px auto 0'}}>
                    <CircularProgress isLoading={true} style={{margin: 'auto'}}/>
                </div>
            );
        } else {
            return null;
        }
    }

    const handleTableType = (type) => {
        setList(type);
    };

    const handleTabType = (type, value) => {
        if (type === 'portfolio') {
            setPortfolioList(value);
        } else {
            setWatchlistList(value);
        }
    };

    const PortfolioTitle = (
        <div className={'Tabs-titleIcon'}>
            <ChartPieIcon/> <span>Portfolio</span>
        </div>
    );

    const WatchlistTitle = (
        <div className={'Tabs-titleIcon'}>
            <FileEyeIcon/> <span>Watchlist</span>
        </div>
    );

    const showNotification = (Message) => {
        setNotification({open: true, message: Message});
    };

    const FeedItem = articleList.map((d, index) => {
        return (
            <div className={"feedItem"} key={index}>
                <div className={"d-flex justify-content-between"}>
                    <Media as="li">
                        <FTNImage imageName="PROFILE" height={40} className="mr-3"/>

                        <Media.Body>
                            <strong>{d.name}</strong>
                            <div className="noMargin">
                                <small>{moment(d.ModifiedOn).format('YYYY-MM-DD hh:mm')}</small>
                            </div>
                        </Media.Body>
                    </Media>
                </div>
                <div className={"mt-3"}> {d.ContentText}{d.RankingID}</div>
                {d.ItemList.map(item => {
                    return (
                        <div>
                            {
                                (() => {
                                    if (Number(d.RankingID) === 6 || Number(d.RankingID) > 6) {
                                        console.log('got', d.RankingID);
                                        return (
                                            <div>
                                                <Card className={"mt-3"}>
                                                    <Card.Body>
                                                        <Card.Text>
                                                            <div className={"d-flex justify-content-between"}>
                                                                <Media as="li">
                                                                    {
                                                                        (() => {
                                                                            if (item.ImageFilePath1) {
                                                                                return (
                                                                                    <img
                                                                                        width={40}
                                                                                        height={40}
                                                                                        className="mr-3"
                                                                                        src={item.ImageFilePath1}
                                                                                        alt="Generic placeholder"
                                                                                    />
                                                                                );
                                                                            } else {
                                                                                return (
                                                                                    <FTNImage imageName="DEFAULT"
                                                                                              height={40}/>
                                                                                );
                                                                            }
                                                                        })()
                                                                    }
                                                                    <Media.Body>
                                                                        <strong>{item.Name}</strong>
                                                                    </Media.Body>
                                                                </Media>
                                                                {(() => {
                                                                    if (Number(item.ChangePrice) > 0 || Number(item.ChangePrice) === 0) {
                                                                        return (
                                                                            <div className={"Flex"}>
                                                                                <UpIcon className={"GreenText"}/>
                                                                                <div>
                                                                                    <h6 className={"noMargin GreenText"}>{Number(item.PriceCurrent).toFixed(2)}</h6>
                                                                                    <small
                                                                                        className={"GreenText"}>{Number(item.ChangePrice).toFixed(2)}({Number(item.ChangePercentage).toFixed(2)}%)
                                                                                    </small>
                                                                                </div>
                                                                            </div>
                                                                        );
                                                                    } else {
                                                                        return (
                                                                            <div className={"Flex"}>
                                                                                <DownIcon className={"RedText"}/>
                                                                                <div>
                                                                                    <h6 className={"noMargin RedText"}>{Number(item.PriceCurrent).toFixed(2)}</h6>
                                                                                    <small
                                                                                        className={"RedText"}>{Number(item.ChangePrice).toFixed(2)}({Number(item.ChangePercentage).toFixed(2)}%)
                                                                                    </small>
                                                                                </div>
                                                                            </div>
                                                                        );
                                                                    }
                                                                })()}
                                                            </div>
                                                            <hr/>
                                                            <div className={"d-flex flex-row-reverse"}>
                                                                <Button variant="primary"
                                                                        onClick={() => showModal(d)}>
                                                                    COPY
                                                                </Button>
                                                            </div>
                                                        </Card.Text>
                                                    </Card.Body>
                                                </Card>
                                            </div>
                                        );
                                    }
                                })()
                            }
                        </div>
                    );
                })}
                <div>
                    <img src={d.ImageFilePath1} alt={""}/>
                    <img src={d.ImageFilePath2} alt={""}/>
                    <img src={d.ImageFilePath3} alt={""}/>
                </div>
            </div>
        );
    });


    const handleClose = () => {
        setNotification({open: false});
    };

    return (
        <React.Fragment>
            <div className={"topBar d-flex  justify-content-between"} style={{paddingTop: 70}}>
                <div className={""}>
                    <Dropdown className={"margin-15"}>
                        <Dropdown.Toggle variant="primary" id="dropdown-basic">
                            {list}
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item onClick={() => handleTableType("News Feed")}>News Feed</Dropdown.Item>
                            <Dropdown.Item onClick={() => handleTableType("Popular Investors")}>Popular
                                Investors</Dropdown.Item>
                            <Dropdown.Item onClick={() => handleTableType("Saved Post")}>Saved Post</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
                <div className={" Flex flexJustifyRight"}>
                </div>
            </div>
            <Container>
                <Row>
                    <Col md={"8"} className={""}>
                        <Loading/>
                        {FeedItem}
                    </Col>
                    <Col md={"4"}>
                        <div className={'feedItem text-center'}>
                            <h2 className={'noMargin'}>
                                <small>$</small>
                                <strong>0.00</strong></h2>
                            <small>$0.00 [0%]</small>
                            <div className={'mt-5 mb-5'}>
                                <small><strong>No Data to Display</strong></small>
                            </div>
                        </div>
                        <div className={'feedItem text-center mt-4'}>
                            <Tabs defaultActiveKey="portfolio" className={"tabsBorder text-center"}>
                                <Tab eventKey="portfolio" title={PortfolioTitle}>
                                    <Dropdown className={"margin-15 liteButton"}>
                                        <Dropdown.Toggle variant="primary" id="dropdown-basic">
                                            {PortfolioList}
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu>
                                            <Dropdown.Item onClick={() => handleTabType("portfolio", "Top Gainers")}>Top
                                                Gainers</Dropdown.Item>
                                            <Dropdown.Item onClick={() => handleTabType("portfolio", "Top Losers")}>Top
                                                Losers</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                    <div className={'Notice Notice-Empty'}>
                                        <ChartPieIcon/>
                                        <span>Portfolio is empty </span>
                                    </div>
                                    <hr/>
                                    <div className={'liteButton'}>
                                        <Button className={''} variant="primary">
                                            View Portfolio
                                        </Button>
                                    </div>
                                </Tab>
                                <Tab eventKey="watchlist" title={WatchlistTitle}>
                                    <Dropdown className={"margin-15 liteButton"}>
                                        <Dropdown.Toggle variant="primary" id="dropdown-basic">
                                            {WatchlistList}
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu>
                                            <Dropdown.Item onClick={() => handleTabType("My Watchlist")}>My
                                                Watchlist</Dropdown.Item>
                                            <Dropdown.Item onClick={() => handleTabType("Recent Invested")}>Recent
                                                Invested</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                    <div className={'d-flex align-items-center justify-content-between mb-3'}>
                                        <Media as="li">
                                            <img
                                                width={40}
                                                height={40}
                                                className="mr-3"
                                                src={"https://pbs.twimg.com/profile_images/2961132879/8f4c848f586257f2cc8df7007d71c8d0.jpeg"}
                                                alt="Generic placeholder"
                                            />
                                            <Media.Body className={'text-left '}>
                                                <strong>Oliver Danvel</strong>
                                                <div className="noMargin">
                                                    Oliver Jean Anne
                                                </div>
                                            </Media.Body>
                                        </Media>
                                        <div>
                                            <Button variant="primary"> COPY </Button>
                                        </div>
                                    </div>
                                    <div className={'d-flex align-items-center justify-content-between mb-3'}>
                                        <Media as="li">
                                            <img
                                                width={40}
                                                height={40}
                                                className="mr-3"
                                                src={"https://pbs.twimg.com/profile_images/2961132879/8f4c848f586257f2cc8df7007d71c8d0.jpeg"}
                                                alt="Generic placeholder"
                                            />
                                            <Media.Body className={'text-left '}>
                                                <strong>Oliver Danvel</strong>
                                                <div className="noMargin">
                                                    Oliver Jean Anne
                                                </div>
                                            </Media.Body>
                                        </Media>
                                        <div>
                                            <Button variant="primary"> COPY </Button>
                                        </div>
                                    </div>
                                    <div className={'d-flex align-items-center justify-content-between mb-3'}>
                                        <Media as="li">
                                            <img
                                                width={40}
                                                height={40}
                                                className="mr-3"
                                                src={"https://pbs.twimg.com/profile_images/2961132879/8f4c848f586257f2cc8df7007d71c8d0.jpeg"}
                                                alt="Generic placeholder"
                                            />
                                            <Media.Body className={'text-left '}>
                                                <strong>Oliver Danvel</strong>
                                                <div className="noMargin">
                                                    Oliver Jean Anne
                                                </div>
                                            </Media.Body>
                                        </Media>
                                        <div>
                                            <Button variant="primary"> COPY </Button>
                                        </div>
                                    </div>
                                    <hr/>
                                    <div className={'liteButton'}>
                                        <Button className={''} variant="primary">
                                            View Watchlist
                                        </Button>
                                    </div>
                                </Tab>
                            </Tabs>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Snackbar
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                open={notification.open}
                onClose={handleClose}
                message={notification.message}
                key={'top' + 'right'}
            />
            <Modal centered show={TransactionModalShow} onHide={hideModal} className={'dashModel'}>
                <Modal.Header closeButton style={{backgroundColor: '#333', color: 'white'}}>
                    <Modal.Title>Copy Trade</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Button variant="primary" className={'modalClose'} onClick={hideModal}> <CloseIcon/>
                    </Button>
                    <CopyModal copyData={copyData} onHideModal={hideModal} onShowNotification={showNotification}/>
                </Modal.Body>
            </Modal>
        </React.Fragment>
    );
};

export default FeedList;
