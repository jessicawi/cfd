import React, {useEffect, useState} from "react";
import CircularProgress from '@material-ui/core/CircularProgress';
import Datasource from '../../data/datasource';
import './market.css';
import {Media, Card, Button} from 'react-bootstrap';
import FTNImage from "../../components/imageList";
import UpIcon from 'mdi-react/ArrowDropUpIcon';
import DownIcon from '@material-ui/icons/ArrowDropDown';
import AddToPhotosIcon from '@material-ui/icons/AddToPhotos';
import LibraryAddCheckIcon from '@material-ui/icons/LibraryAddCheck';
import Snackbar from '@material-ui/core/Snackbar';
import Container from "../03-feed/feedList";

const MarketRateList = () => {
    // Loading
    const [isLoading, setIsLoading] = React.useState(false);

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

    // notification
    const [notification, setNotification] = React.useState({
        open: false,
        message: ''
    });
    const showNotification = (Message) => {
        setNotification({open: true, message: Message});
    };
    const handleClose = () => {
        setNotification({open: false});
    };

    // initialData
    const [data, setData] = React.useState({
        marketList: [],
    });
    const getMarketRateList = async () => {
        setIsLoading(true)
        const response = await Datasource.shared.getMarketRateList();
        if (response) {
            setData({
                marketList: response.Data.ItemList,
            });
        }
        setIsLoading(false)

    };
    useEffect(() => {

        getMarketRateList();
    }, []);

    // function
    const addToWatchlist = () => {
        showNotification('added to watchlist');
    };

    // template
    const marketList = data.marketList.map(d => {
        return (
            <div className={"mt-3 col-md-3 "}>
                <Card className={'ml-1 mr-1'}>
                    <Card.Body>
                        <Card.Text>
                            <div className={"d-flex justify-content-between"}>
                                <Media as="li">
                                    {(() => {
                                        if (d.ImageFilePath1) {
                                            return (
                                                <img
                                                    width={40}
                                                    height={40}
                                                    className="mr-3"
                                                    src={d.ImageFilePath1}
                                                    alt="Generic placeholder"
                                                />
                                            );
                                        } else {
                                            return (
                                                <FTNImage imageName="DEFAULT" height={40} className="mr-3"/>
                                            );
                                        }
                                    })()}
                                    <Media.Body>
                                        <strong>{d.Name}</strong>
                                    </Media.Body>
                                </Media>
                                <Button variant="primary" className={'marketButton'} onClick={addToWatchlist}>
                                    <AddToPhotosIcon/>
                                </Button>
                            </div>
                            <div className={"d-flex"}>
                                {(() => {
                                    if (Number(d.ChangePrice) > 0 || Number(d.ChangePrice) === 0) {
                                        return (
                                            <div style={{flex: 1}} className='pt-2'>
                                                <div className={"Flex"} style={{justifyContent: 'flex-end'}}>
                                                    <UpIcon className={"GreenText"}/>
                                                    <small
                                                        className={"GreenText"}>{Number(d.ChangePrice).toFixed(2)}({Number(d.ChangePercentage).toFixed(2)}%)
                                                    </small>
                                                </div>
                                                <div className={"Flex"}>
                                                    <div className='marketItemPrice'>
                                                        <small
                                                            className={""}>Current
                                                        </small>
                                                        <h6
                                                            className={"GreenText noMargin"}>{Number(d.PriceCurrent).toFixed(2)}
                                                        </h6>
                                                    </div>
                                                    <div className='marketItemPrice'>
                                                        <small
                                                            className={""}>Previous
                                                        </small>
                                                        <h6
                                                            className={"GreenText noMargin"}>{Number(d.PricePrevious).toFixed(2)}
                                                        </h6>
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    } else {
                                        return (
                                            <div style={{flex: 1}} className='pt-2'>
                                                <div className={"Flex"} style={{justifyContent: 'flex-end'}}>
                                                    <DownIcon className={"RedText"}/>
                                                    <small
                                                        className={"RedText"}>{Number(d.ChangePrice).toFixed(2)}({Number(d.ChangePercentage).toFixed(2)}%)
                                                    </small>
                                                </div>
                                                <div className={"Flex"}>
                                                    <div className='marketItemPrice RedBox'>
                                                        <small>Current</small>
                                                        <h6
                                                            className={" noMargin"}>{Number(d.PriceCurrent).toFixed(2)}
                                                        </h6>
                                                    </div>
                                                    <div className='marketItemPrice'>
                                                        <small>Previous</small>
                                                        <h6
                                                            className={" noMargin"}>{Number(d.PricePrevious).toFixed(2)}
                                                        </h6>
                                                    </div>
                                                </div>
                                            </div>

                                        );
                                    }
                                })()}
                            </div>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        );
    });
    return (
        <React.Fragment>
            <div style={{paddingTop: 70}}/>
            <div className='container'>
                <div className='row'>
                    <Loading/>
                    {marketList}
                </div>
            </div>
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
        </React.Fragment>
    );
};
export default MarketRateList;
