import React, {useEffect} from 'react';
import Layout from './layout/layout';
import './App.css';
import {BrowserRouter, Redirect, useHistory} from "react-router-dom";
import Cookies from "js-cookie";
import Datasource from './data/datasource';


const App = (props) => {

    useEffect(() => {
        HomeButton();
    }, []);

    function HomeButton() {
        const history = useHistory();
        const token = async () => {
            await Datasource.shared.checkToken();
        };
        if (token) {
            console.log(token, 'token');
            history.push("/login");
        }
    }

    {
        return (
            <React.Fragment>
                <BrowserRouter>
                    <Layout> </Layout>
                </BrowserRouter>
            </React.Fragment>
        );
    }
};

export default App;
