import React, {useEffect} from 'react';
import {makeStyles, useTheme} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import SideBar from './sideBar';
import Header from './header';
import {Button, Modal} from "react-bootstrap";
import CloseIcon from "mdi-react/CloseCircleIcon";
import CreateFeedModal from '../pages/03-feed/createFeedModal';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

const TopBar = (props) => {
    const useStyles = makeStyles(() => ({
        root: {
            display: 'flex',
        },
    }));
    const classes = useStyles();

    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [modalTitle, setModalTitle] = React.useState("");
    const [notification, setNotification] = React.useState({
        open: false,
        message: ''
    });

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
        console.log('xxxxxxxxxxx');
    };

    // Modal

    const [showModal, setShowModal] = React.useState(false);
    const showTransactionModal = (title) => {
        setShowModal(true);
        setModalTitle(title);
    };
    const hideTransactionModal = () => {
        setShowModal(false);
    };

    const articleCreated = (Message) =>{
        setNotification({ open: true, message: Message});
    };

    const modalBody = (
        <CreateFeedModal onArticleCreated={articleCreated} onHideTransactionModal={hideTransactionModal}/>
    );

    const handleClose = () => {
        setNotification({open: false});
    };

    return (
        <div className={classes.root}>
            <CssBaseline/>
            <Header mobileOpen={mobileOpen} onDrawerToggle={handleDrawerToggle}
                    onShowTransactionModal={showTransactionModal}/>
            <SideBar mobileOpen={mobileOpen} onDrawerToggle={handleDrawerToggle}/>
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
            <Modal centered show={showModal} onHide={hideTransactionModal} className={'dashModel'}>
                <Modal.Header closeButton style={{backgroundColor: '#333', color: 'white'}}>
                    <Modal.Title>{modalTitle}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {modalBody}
                </Modal.Body>
            </Modal>
        </div>
    );

};

export default TopBar;
