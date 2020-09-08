import React, {useEffect, useState} from "react";
import CircularProgress from '@material-ui/core/CircularProgress';
import Datasource from '../../data/datasource';
import './deposit.css';
import {Media, Card, Button, ButtonGroup} from 'react-bootstrap';
import FTNImage from "../../components/imageList";
import Snackbar from '@material-ui/core/Snackbar';
import TextField from "@material-ui/core/TextField";
import { triggerBase64Download } from 'react-base64-downloader';

import FileCopyIcon from '@material-ui/icons/FileCopy';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import Dialog from '@material-ui/core/Dialog';
import DialogContentText from '@material-ui/core/DialogContentText';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import ShareIcon from '@material-ui/icons/Share';
import GetAppIcon from '@material-ui/icons/GetApp';

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
        walletAddress: '',
        qrCodeSrc: []
    });
    useEffect(() => {

        console.log(data);
    }, [data]);
    const getProfileWalletAddress = async () => {
        setIsLoading(true);
        const response = await Datasource.shared.getProfile();
        if (response) {
            setData({
                walletAddress: response.Data.ETH_Address,
            });
        }
        setIsLoading(false);

    };
    useEffect(() => {
        getProfileWalletAddress();
        getQrCode();
    }, []);

    // function
    const [openQRCode, setOpenQRCode] = React.useState(false);
    const closeQRCode = () => {
        setOpenQRCode(false);
    };
    const getQrCode = async () => {
        const response = await Datasource.shared.GetERC20Address();
        if (response) {
            console.log(response);
            const reader = new FileReader();
            reader.readAsDataURL(response);
            reader.onloadend = function () {
                const base64String = reader.result;
                const withoutTag = base64String.substr(base64String.indexOf(', ') + 1);
                setData(d => {
                    return {
                        ...d,
                        qrCodeSrc: withoutTag,
                    };
                });

            };
        }
    };

    // template
    const DialogTitle = ((props) => {
        const {children, classes, onClose, ...other} = props;
        return (
            <MuiDialogTitle disableTypography {...other}>
                <h6>{children}</h6>
                {onClose ? (
                    <IconButton aria-label="close" onClick={onClose}>
                        <CloseIcon/>
                    </IconButton>
                ) : null}
            </MuiDialogTitle>
        );
    });
    return (
        <React.Fragment>
            <div style={{paddingTop: 70}}/>
            <div className='container'>
                <div className='content-container'>
                    <Loading/>
                    <div className='content-wrap'>
                        <h4>Fund Your Account</h4>
                        <div className=" walletListItem">
                            <div className='d-flex'>
                                <div style={{flex: 1}} className='walletDetails'>
                                    <Media as="li">
                                        <FTNImage imageName="ETH" height={50} className="mr-3 profileImage"/>
                                        <Media.Body>
                                            <h6>ERC-20</h6>
                                            <div className="noMargin">
                                                <small>USDT</small>
                                            </div>
                                        </Media.Body>
                                    </Media>
                                    <hr/>
                                    <div className='walletItemAction'>
                                        <span>Wallet Address</span>
                                        <TextField
                                            id="outlined-multiline-static"
                                            multiline
                                            rows={2}
                                            value={data.walletAddress}
                                            variant="outlined"
                                            style={{width: 100 + '%'}}
                                        />
                                    </div>
                                </div>
                                <div >
                                    <img src={data.qrCodeSrc} style={{marginLeft: 'auto', display: 'block'}}
                                         alt=""/>
                                </div>
                            </div>
                            <div className='walletActionItem'>
                                <ButtonGroup >
                                    <CopyToClipboard text={data.walletAddress}
                                                     onCopy={() => showNotification('Wallet Address Copied')}>
                                        <Button><FileCopyIcon/> Copy Address </Button>
                                    </CopyToClipboard>
                                    <Button onClick={() => triggerBase64Download(data.qrCodeSrc, 'qrCode')}><GetAppIcon/> Download</Button>
                                </ButtonGroup>
                            </div>
                        </div>
                    </div>
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
            <Dialog
                open={openQRCode}
                onClose={closeQRCode}
                keepMounted
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogContent>
                    <h6>Scan QR Code to Get Wallet Address</h6>
                    <DialogContentText id="alert-dialog-slide-description">
                        <img src={data.qrCodeSrc} style={{margin: 'auto', display: 'block'}}/>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={closeQRCode} color="primary" className="fullwidth">
                        Back
                    </Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
};
export default MarketRateList;
