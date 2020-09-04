import React from "react";
import {lighten, makeStyles} from "@material-ui/core/styles/makeStyles";
import {Dropdown, Row, Col, Media, Card, Button, Form, OverlayTrigger, Popover, Tabs, Tab} from 'react-bootstrap';
import MoreVert from 'mdi-react/MoreVertIcon';
import Container from "@material-ui/core/Container";
import UpIcon from 'mdi-react/ArrowDropUpIcon';
import LikeIcon from 'mdi-react/LikeIcon';
import CommentIcon from 'mdi-react/CommentIcon';
import FacebookIcon from 'mdi-react/FacebookIcon';
import TwitterIcon from 'mdi-react/TwitterIcon';
import LinkedinIcon from 'mdi-react/LinkedinIcon';
import EmailBoxIcon from 'mdi-react/EmailBoxIcon';
import FileEyeIcon from 'mdi-react/FileEyeIcon';
import ChartPieIcon from 'mdi-react/ChartPieIcon';
import LinkIcon from 'mdi-react/LinkIcon';
import './feed.css';
import BTC from "../../assets/02-01-dashboard-cryptoicon-btc.png";

const FeedList = () => {

    //handle Dropdown
    const [list, setList] = React.useState('News Feed');
    const [WatchlistList, setWatchlistList] = React.useState('My Watchlist');
    const [PortfolioList, setPortfolioList] = React.useState('Top Gainers');
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

    return (
        <React.Fragment>
            <div className={"topBar d-flex  justify-content-between"}>
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
                        <div className={"feedItem"}>
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
                                            Oliver Jean Anne . <small>35 Minutes Ago</small>
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
                            <div className={"mt-3"}> if this thing cracks 12k I think we will get a bull run, like
                                Pamplona style. Shall we push it there?
                            </div>

                            <Card className={"mt-3"}>
                                <Card.Body>
                                    <Card.Text>
                                        <div className={"d-flex justify-content-between"}>
                                            <Media as="li">
                                                <img
                                                    width={40}
                                                    height={40}
                                                    className="mr-3"
                                                    src={BTC}
                                                    alt="Generic placeholder"
                                                />
                                                <Media.Body>
                                                    <strong>BTC</strong>
                                                    <p className={"noMargin"}>
                                                        Bitcoin
                                                    </p>
                                                </Media.Body>
                                            </Media>

                                            <div className={"Flex"}>
                                                <UpIcon className={"GreenText"}/>
                                                <div>
                                                    <h6 className={"noMargin GreenText"}>41.21</h6>
                                                    <small className={"GreenText"}>(2.76%)</small>
                                                </div>
                                            </div>
                                        </div>
                                        <hr/>
                                        <div className={"d-flex flex-row-reverse"}>
                                            <Button variant="primary">
                                                TRADE
                                            </Button>
                                        </div>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                            <div className={"textButton mt-3"}>
                                <Button variant="primary" size='sm'>
                                    <LikeIcon/> 2
                                </Button>
                                <Button variant="primary" size='sm'>
                                    <CommentIcon/> 2
                                </Button>
                            </div>
                            <hr/>
                            <div className={"feed-commentNav d-flex justify-content-center text-center liteButton"}>
                                <Button variant="primary" className={"flex-fill"}>Like</Button>
                                <Button variant="primary" className={"flex-fill"}>Comment</Button>
                                <OverlayTrigger
                                    trigger="focus"
                                    key={'top'}
                                    placement={'top'}
                                    overlay={
                                        <Popover id={'popover-positioned-top'}>
                                            <Popover.Content className={"textButton"}>
                                                <Button variant="primary"><FacebookIcon/></Button>
                                                <Button variant="primary"><TwitterIcon/></Button>
                                                <Button variant="primary"><LinkedinIcon/></Button>
                                                <Button variant="primary"><EmailBoxIcon/></Button>
                                                <Button variant="primary"><LinkIcon/></Button>
                                            </Popover.Content>
                                        </Popover>
                                    }
                                >
                                    <Button variant="secondary" className={'flex-fill'}>Share</Button>
                                </OverlayTrigger>
                            </div>
                            <div className={"feed-commentBox"}>
                                <div className={"d-flex justify-content-between "}>
                                    <Media as="li">
                                        <img
                                            width={40}
                                            height={40}
                                            className="mr-3"
                                            src={"https://pbs.twimg.com/profile_images/2961132879/8f4c848f586257f2cc8df7007d71c8d0.jpeg"}
                                            alt="Generic placeholder"
                                        />
                                        <Media.Body>
                                            <strong>Oliver Danvel</strong> . <small>35 Minutes Ago</small>
                                            <div>
                                                <span>if this thing cracks 12k I think we will get a bull run, like Pamplona style. Shall we push it there?</span>
                                            </div>

                                            <div className={"textButton"}>
                                                <Button variant="primary" size='sm'>
                                                    Like
                                                </Button>
                                                .

                                                <Button variant="primary" size='sm'>
                                                    Reply
                                                </Button>
                                            </div>
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
                                    <Media as="li">
                                        <img
                                            width={40}
                                            height={40}
                                            className="mr-3"
                                            src={"https://pbs.twimg.com/profile_images/2961132879/8f4c848f586257f2cc8df7007d71c8d0.jpeg"}
                                            alt="Generic placeholder"
                                        />
                                        <Media.Body>
                                            <strong>Oliver Danvel</strong> . <small>35 Minutes Ago</small>
                                            <div>
                                                <span>if this thing cracks 12k I think we will get a bull run, like Pamplona style. Shall we push it there?</span>
                                            </div>

                                            <div className={"textButton"}>
                                                <Button variant="primary" size='sm'>
                                                    Like
                                                </Button>
                                                .

                                                <Button variant="primary" size='sm'>
                                                    Reply
                                                </Button>
                                            </div>
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

                                <Media as="li" className={"mt-3"}>
                                    <img
                                        width={40}
                                        height={40}
                                        className="mr-3"
                                        src={"https://pbs.twimg.com/profile_images/2961132879/8f4c848f586257f2cc8df7007d71c8d0.jpeg"}
                                        alt="Generic placeholder"
                                    />
                                    <Media.Body>
                                        <Form.Control type="text" placeholder="Write a comment..."/>
                                    </Media.Body>
                                </Media>


                            </div>
                        </div>
                        <div className={"feedItem"}>
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
                                            Oliver Jean Anne . <small>35 Minutes Ago</small>
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
                            <div className={"mt-3"}> if this thing cracks 12k I think we will get a bull run, like
                                Pamplona style. Shall we push it there?
                            </div>
                            <div>
                                <img
                                    src={"https://pix10.agoda.net/hotelImages/1259471/-1/dac9a50c8306963f88c512700bd55d39.jpg?s=1024x768"}
                                    className={"img-fluid mt-3"}/>
                            </div>
                            <div className={"textButton mt-3"}>
                                <Button variant="primary" size='sm'>
                                    <LikeIcon/> 2
                                </Button>
                                <Button variant="primary" size='sm'>
                                    <CommentIcon/> 2
                                </Button>
                            </div>
                            <hr/>
                            <div className={"feed-commentNav d-flex justify-content-center text-center liteButton"}>
                                <Button variant="primary" className={"flex-fill"}>Like</Button>
                                <Button variant="primary" className={"flex-fill"}>Comment</Button>
                                <OverlayTrigger
                                    trigger="focus"
                                    key={'top'}
                                    placement={'top'}
                                    overlay={
                                        <Popover id={'popover-positioned-top'}>
                                            <Popover.Content className={"textButton"}>
                                                <Button variant="primary"><FacebookIcon/></Button>
                                                <Button variant="primary"><TwitterIcon/></Button>
                                                <Button variant="primary"><LinkedinIcon/></Button>
                                                <Button variant="primary"><EmailBoxIcon/></Button>
                                                <Button variant="primary"><LinkIcon/></Button>
                                            </Popover.Content>
                                        </Popover>
                                    }
                                >
                                    <Button variant="secondary" className={'flex-fill'}>Share</Button>
                                </OverlayTrigger>
                            </div>
                        </div>
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
                                                <p className={"noMargin"}>
                                                    Oliver Jean Anne
                                                </p>
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
                                                <p className={"noMargin"}>
                                                    Oliver Jean Anne
                                                </p>
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
                                                <p className={"noMargin"}>
                                                    Oliver Jean Anne
                                                </p>
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
        </React.Fragment>
    );
};

export default FeedList;
