import React from 'react';
import Layout from './layout/layout';
import './App.css';
import {BrowserRouter, Switch, Route} from "react-router-dom";

function App() {
    return (
        <React.Fragment>
            <BrowserRouter>
                <Layout> </Layout>
            </BrowserRouter>
        </React.Fragment>
    );
}

export default App;
