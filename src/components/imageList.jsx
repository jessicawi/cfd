import BTC from '../assets/02-01-dashboard-cryptoicon-btc.png';
import ETH from '../assets/02-01-dashboard-cryptoicon-eth.png';
import XRP from '../assets/02-01-dashboard-cryptoicon-xrp.png';
import BCH from '../assets/02-01-dashboard-cryptoicon-bch.png';
import DASH from '../assets/02-01-dashboard-cryptoicon-dash.png';
import LTC from '../assets/02-01-dashboard-cryptoicon-ltc.png';
import GOLDBTC from '../assets/02-01-dashboard-cryptoicon-goldbtc.png';
import ETHBTC from '../assets/02-01-dashboard-cryptoicon-ethbtc.png';
import ETHGBP from '../assets/02-01-dashboard-cryptoicon-ethgbp.png';
import GOLD from '../assets/02-01-dashboard-cryptoicon-gold.png';
import SILVER from '../assets/02-01-dashboard-cryptoicon-silver.png';
import LOGO from '../assets/00-logo.png';
import Graph from '../assets/02-01-dashboard-graph.png';
import decGraph from '../assets/02-01-dashboard-graph-dec.png';
import PROFILE from '../assets/00-noprofile.jpeg';
import DEFAULT from '../assets/00-default.jpeg';
import {Media} from "react-bootstrap";
import React from "react";

export const CONST_ICON = {
    BTC,
    ETH,
    XRP,
    BCH,
    DASH,
    LTC,
    GOLDBTC,
    ETHBTC,
    ETHGBP,
    GOLD,
    SILVER,
    LOGO,
    Graph,
    decGraph,
    PROFILE,
    DEFAULT

};

const FTNImage = ({imageName, width, height, className = "", alt = "img"}) => {
    if (!imageName) {
        return "icon needed";
    }

    const iconSrc = CONST_ICON[imageName];
    return <img width={width}
                height={height}
                className={className}
                style={{marginRight:10}}
                src={iconSrc}
                alt={alt}/>;
};

export default FTNImage;

