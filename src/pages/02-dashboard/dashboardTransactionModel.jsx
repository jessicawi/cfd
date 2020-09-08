import React from "react";
import {Tab, Button,  Media, Dropdown,  Nav, Card} from 'react-bootstrap';
import ExchangeIcon from 'mdi-react/SwapHorizontalBoldIcon';
import TextField from "@material-ui/core/TextField";
import FTNImage from "../../components/imageList";

const DashboardTrasactionModal = () => {

    // const [TransactionModalShow, setTransactionModalShow] = React.useState(false);
    // const HideTransactionModal = () => {
    //     setTransactionModalShow(false);
    // };
    const [ExchangeType, setExchangeType] = React.useState('UNITS');
    const [ExchangeTypeTitle, setExchangeTypeTitle] = React.useState('AMOUNT');
    const ToggleExchangeType = () => {
        if (ExchangeType === 'UNITS') {
            setExchangeType('AMOUNT');
            setExchangeTypeTitle('UNITS');
        } else {
            setExchangeType('UNITS');
            setExchangeTypeTitle('AMOUNT');
        }
    };
    return (
        <React.Fragment>
                <Tab.Container defaultActiveKey="first">
                    <Nav variant="pills" className="d-flex justify-content-center">

                        <Nav.Item>
                            <Nav.Link eventKey="first">SELL</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="second">BUY</Nav.Link>
                        </Nav.Item>
                    </Nav>
                    <Tab.Content>
                        <Tab.Pane eventKey="first">
                            <div className={"d-flex justify-content-between"}>
                                <Media as="li">
                                    <FTNImage imageName="BTC" height={40}/>
                                    <Media.Body>
                                        <strong>SELL BTC</strong>
                                        <h4 className={"noMargin"}>11603.24 <small className={"GreenText"}>261.68
                                            (1.90%)</small></h4>
                                        <small>Price by Etoro, in USD</small>
                                    </Media.Body>
                                </Media>

                                <Dropdown >
                                    <Dropdown.Toggle variant="primary" id="dropdown-basic">
                                        TRADE
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <Dropdown.Item>Order</Dropdown.Item>
                                        <Dropdown.Item>Trade</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                            <hr/>
                            <div className={'d-flex justify-content-between dashboardModel-Amount align-items-center'}>
                                <strong>{ExchangeTypeTitle}</strong>
                                <div className={'InputNumber textButton'}>
                                    <TextField
                                        id="standard-number"
                                        label="Number"
                                        type="number"
                                        variant="outlined"
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                    />
                                </div>
                                <Button variant="primary" onClick={ToggleExchangeType}>
                                    <ExchangeIcon/> {ExchangeType}
                                </Button>
                            </div>
                            <span className={'RedText mt-3 d-block text-center'}>Deposit $1,003 in order to open this trade</span>
                            <Card className={"mt-3"}>
                                <Card.Body>
                                    <Card.Text>
                                        <div className={"d-flex justify-content-between text-center"}>
                                            <div>
                                                <h6 className={"noMargin RedText"}>-501.67</h6>
                                                <small className={""}>STOP LOSS</small>
                                            </div>
                                            <div>
                                                <h6 className={"noMargin "}>X1</h6>
                                                <small className={""}>LEVERAGE</small>
                                            </div>
                                            <div>
                                                <h6 className={"noMargin GreenText"}>NO TP</h6>
                                                <small className={""}>TAKE PROFIT</small>
                                            </div>
                                        </div>
                                        <hr/>
                                        <div className={" text-center"}>
                                            <strong>
                                                CFD TRADE<br/>
                                                REVIEW OR EDIT THE TRADE PARAMETERS
                                            </strong>
                                        </div>
                                    </Card.Text>
                                </Card.Body>
                            </Card>

                            <Button variant="primary" className={'mt-5 ml-auto mr-auto d-table'}>
                                <h4 className={'noMargin'}>Open Trade</h4>
                            </Button>
                            <span className={'mt-5 d-block text-center'}>Overnight Fees: 123342</span>
                        </Tab.Pane>
                        <Tab.Pane eventKey="second">
                            <div className={"d-flex justify-content-between"}>
                                <Media as="li">
                                    <FTNImage imageName="BTC" height={40}/>
                                    <Media.Body>
                                        <strong>BUY BTC</strong>
                                        <h4 className={"noMargin"}>11603.24 <small className={"GreenText"}>261.68
                                            (1.90%)</small></h4>
                                        <small>Price by Etoro, in USD</small>
                                    </Media.Body>
                                </Media>

                                <Dropdown className={" "}>
                                    <Dropdown.Toggle variant="primary" id="dropdown-basic">
                                        TRADE
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <Dropdown.Item>Order</Dropdown.Item>
                                        <Dropdown.Item>Trade</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                            <hr/>
                            <div className={'d-flex justify-content-between dashboardModel-Amount align-items-center'}>
                                <strong>{ExchangeTypeTitle}</strong>
                                <div className={'InputNumber textButton'}>
                                    <TextField
                                        id="standard-number"
                                        label="Number"
                                        type="number"
                                        variant="outlined"
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                    />
                                </div>
                                <Button variant="primary" onClick={ToggleExchangeType}>
                                    <ExchangeIcon/> {ExchangeType}
                                </Button>
                            </div>
                            <span className={'RedText mt-3 d-block text-center'}>Deposit $1,003 in order to open this trade</span>
                            <Card className={"mt-3"}>
                                <Card.Body>
                                    <Card.Text>
                                        <div className={"d-flex justify-content-between text-center"}>
                                            <div>
                                                <h6 className={"noMargin RedText"}>-501.67</h6>
                                                <small className={""}>STOP LOSS</small>
                                            </div>
                                            <div>
                                                <h6 className={"noMargin "}>X1</h6>
                                                <small className={""}>LEVERAGE</small>
                                            </div>
                                            <div>
                                                <h6 className={"noMargin GreenText"}>NO TP</h6>
                                                <small className={""}>TAKE PROFIT</small>
                                            </div>
                                        </div>
                                        <hr/>
                                        <div className={" text-center"}>
                                            <strong>
                                                CFD TRADE<br/>
                                                REVIEW OR EDIT THE TRADE PARAMETERS
                                            </strong>
                                        </div>
                                    </Card.Text>
                                </Card.Body>
                            </Card>

                            <Button variant="primary" className={'mt-5 ml-auto mr-auto d-table'}>
                                <h4 className={'noMargin'}>Open Trade</h4>
                            </Button>
                            <span className={'mt-5 d-block text-center'}>Overnight Fees: 123342</span>
                        </Tab.Pane>
                    </Tab.Content>
                </Tab.Container>
        </React.Fragment>
    );
};

export default DashboardTrasactionModal;
