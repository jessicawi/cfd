import "draft-js/dist/Draft.css";
import "draft-js-mention-plugin/lib/plugin.css";
import React, {useEffect, useState} from 'react';
import Layout from './layout/layout';
import './App.css';
import {BrowserRouter, Switch, withRouter, Route} from "react-router-dom";
import Datasource from './data/datasource';
import LoginPage from "./pages/00-Login/login";


const App = (props) => {
    return (
        <BrowserRouter>
            <AppContent {...props}/>
        </BrowserRouter>
    );
};


const AppContent = withRouter((props) => {
    // const history = useHistory();
    // useEffect(() => {
    // });
    //
    // const HomeButton = async () => {
    //     try {
    //         const response = await Datasource.shared.checkToken();
    //         console.log(response,'xxxxxxxxxxxxxxx');
    //         if (response === null || response === undefined) {
    //             console.log(response, 'token');
    //             history.push("/login");
    //         }
    //     } catch (e) {
    //         console.error("token err", e);
    //     }
    // };
    const [isReady, setIsReady] = useState(false); //permission ready when login

    useEffect(() => {
        const init = async () => {
            setIsReady(true);
        };

        init().then();
    }, []);
    return (
        <div className={"root"}>
            {Datasource.shared.claims !== null ?
                (
                    <React.Fragment>
                        {isReady ?
                            <Layout/> :
                            <div style={{padding: 20}}>Connecting Server</div>
                        }
                    </React.Fragment>
                ) :
                (
                    <Switch><Route path="/" component={LoginPage}/></Switch>
                )
            }
        </div>
    );
});


export default App;
