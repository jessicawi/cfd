import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import {makeStyles} from '@material-ui/core/styles';
import CreateFeedModal from "../../pages/03-feed/createFeedModal";

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

// export default function notificationMessage() {
const notificationMessage = (props) => {
    const {propOpen} = props;

    //
    // const handleClick = () => {
    //     setOpen(true);
    // };
    const [open, setOpen] = React.useState(false);
    setOpen(propOpen);

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    return (
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
            <Alert onClose={handleClose} severity="success">
                This is a success message!
            </Alert>
        </Snackbar>
    );
};

export default notificationMessage;
