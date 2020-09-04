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

    const HomeButton=()=> {
        const history = useHistory();
        const token = async () => {
            try{
                return await Datasource.shared.checkToken();
            } catch(e){
                console.error("token err",e)
            }

        };
        if (token) {
            console.log(token, 'token');
            history.push("/login");
        }
    }

    return (
        <React.Fragment>
            <BrowserRouter>
                <Layout> </Layout>
            </BrowserRouter>
        </React.Fragment>
    );
};

export default App;