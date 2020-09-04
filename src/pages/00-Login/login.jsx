import React from "react";
import {lighten, makeStyles} from "@material-ui/core/styles/makeStyles";
import {Dropdown, Row, Col} from 'react-bootstrap';
import Settings from 'mdi-react/SettingsIcon';
import Button from "@material-ui/core/Button";
import './login.css';
import TextField from "@material-ui/core/TextField";
import Datasource from '../../data/datasource';

const Login = () => {

    const [values, setValues] = React.useState({
        user: '',
        password: '',
    });

    const handleConfirmClick = async () => {
        try {
            const response = await Datasource.shared.login('password', values.user, values.password);
            if (response) {
                console.log(response);
            }
        } catch (err) {
            console.error("err", err);
        }
    };

    const handleChange = (prop) => (event) => {
        setValues({...values, [prop]: event.target.value});
    };

    return (
        <React.Fragment>
            <div className={'loginBackground'}>
                <div className={'loginWrap'}>
                    <div>
                        <h3 style={{textAlign: "center"}}>Sign In</h3>
                        <div style={{height: 20}}/>
                        <TextField
                            id="standard-number"
                            label="Username"
                            type="text"
                            variant="outlined"
                            className={"loginInput"}
                            value={values.user}
                            onChange={handleChange('user')}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                        <TextField
                            id="standard-password-input"
                            label="Password"
                            type="password"
                            variant="outlined"
                            className={"loginInput"}
                            value={values.password}
                            onChange={handleChange('password')}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                        <Button variant="contained" color="primary" style={{width: 100 + '%'}} size="large"
                                onClick={handleConfirmClick}>
                            SIGN IN
                        </Button>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Login;
