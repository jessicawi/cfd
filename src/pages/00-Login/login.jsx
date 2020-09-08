import React from "react";
import {BrowserRouter, useHistory} from "react-router-dom";
import Button from "@material-ui/core/Button";
import './login.css';
import TextField from "@material-ui/core/TextField";
import Datasource from '../../data/datasource';
import FTNImage from "../../components/imageList";
import CircularProgress from '@material-ui/core/CircularProgress';


const Login = () => {
    const history = useHistory();

    const [values, setValues] = React.useState({
        user: 'c01',
        password: 'qweqwe2020',
        isLoading: false
    });

    const handleConfirmClick = async () => {
        setValues({
            isLoading: true
        });
        try {
            const response = await Datasource.shared.login('password', values.user, values.password);
            if (response) {
                history.push("/");
            }
        } catch (err) {
            console.error("err", err);
        }

        setValues({
            isLoading: false
        });
    };

    const handleChange = (prop) => (event) => {
        setValues({...values, [prop]: event.target.value});
    };

    function Loading() {
        const ifLoading = values.isLoading;
        if (ifLoading) {
            return (
                <div style={{display:'table', margin:'20px auto 0'}}>
                    <CircularProgress isLoading={true} style={{margin: 'auto'}}/>
                </div>
            );
        } else {
            return null;
        }
    }

    return (
        <React.Fragment>
            <div className={'loginBackground'}>
                <div className={'loginWrap'}>
                    <FTNImage imageName="LOGO" height={150} className="logo"/>
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
                        <Button variant="contained" color="primary" style={{width: 100 + '%'}} size="large" disabled={values.isLoading}
                                onClick={handleConfirmClick}>
                            SIGN IN
                        </Button>
                        <Loading/>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Login;
