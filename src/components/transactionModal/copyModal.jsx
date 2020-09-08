import React from "react";
import {Tab, Button, Media, Dropdown, Nav, Card} from 'react-bootstrap';
import ExchangeIcon from 'mdi-react/SwapHorizontalBoldIcon';
import TextField from "@material-ui/core/TextField";
import FTNImage from "../../components/imageList";
import moment from "../../pages/03-feed/feedList";
import Datasource from '../../data/datasource';
import {ClickAwayListener} from '@material-ui/core';

const CopyModal = (props) => {
    const {copyData,onHideModal,onShowNotification} = props;
    const [contractData, setContractData] = React.useState({
        amount: '',
        password: ''
    });
    const [disableInput, setDisableInput] = React.useState(false);

    const PostContractAmount = async () => {
        const response = await Datasource.shared.PostContractAmountOption(contractData.password,contractData.amount,copyData.MemberID);
        if(response){
            if (response.Code === 1) {
                onShowNotification(response.Message);
                onHideModal();
            }
        }
    };
    return (
        <div style={{padding: 20}}>
            <div className={"d-flex justify-content-between"}>
                <Media as="li">
                    <FTNImage imageName="PROFILE" height={40} className="mr-3"/>
                    <Media.Body>
                        <strong>{copyData.name}</strong>
                        {/*<h4 className={"noMargin"}>11603.24 <small className={"GreenText"}>261.68
                            (1.90%)</small></h4>
                        <small>Price by Etoro, in USD</small>8*/}
                    </Media.Body>
                </Media>
            </div>
            <hr/>
            <div>
                <strong style={{display: 'block', marginBottom: 10, textAlign: 'center'}}>Amount</strong>
                <div className={'InputNumber textButton'}>
                    <ClickAwayListener onClickAway={() => setDisableInput(false)}>
                        <TextField
                            id="standard-number"
                            defaultValue={"100"}
                            label="Amount"
                            type="number"
                            variant="outlined"
                            onKeyDown={() => setDisableInput(true)}
                            disabled={disableInput}
                            style={{width: 100 + '%'}}
                            onChange={(e) => setContractData({amount: e})}
                            inputProps={{
                                step: 100,
                                min: 0
                            }}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </ClickAwayListener>
                </div>
            </div>
            <span className={'RedText mt-3 mb-4 d-block text-center'}>如今$100即可开始本次跟单</span>
            <div className={'InputNumber textButton'}>
                <TextField
                    id="outlined-password-input"
                    defaultValue={"qweqwe2020"}
                    label="Second Password"
                    type="password"
                    autoComplete="current-password"
                    variant="outlined"
                    onChange={(e) => setContractData({password: e})}
                    fullWidth={true}
                />
            </div>
            <Button variant="primary" className={'mt-5 ml-auto mr-auto d-table'} style={{width: 100 + '%'}}
                    onClick={PostContractAmount}>
                <p className={'noMargin'}>Copy Trade</p>
            </Button>
        </div>
    );
};

export default CopyModal;
