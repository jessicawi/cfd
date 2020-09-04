import React, {useEffect} from 'react';
import Layout from './layout/layout';
import './App.css';
import {BrowserRouter, Redirect, useHistory, withRouter} from "react-router-dom";
import Cookies from "js-cookie";
import Datasource from './data/datasource';


const App = (props) => {
    return (
        <BrowserRouter>
            <AppContent {...props}/>
        </BrowserRouter>
    );
};


const AppContent = withRouter((props) => {
    const history = useHistory();
    useEffect(() => {
        HomeButton();
    }, []);

    const HomeButton = async () => {
        try {
            const response = await Datasource.shared.checkToken();
            console.log(response);
            if (response === null || response === undefined) {
                console.log(response, 'token');
                history.push("/login");
            }
        } catch (e) {
            console.error("token err", e);
        }
    };

    return (
        <div className={"root"}>
            <Layout/>
        </div>
    );
});


export default App;
