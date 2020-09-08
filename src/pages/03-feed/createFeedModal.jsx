import React, {useEffect} from "react";
import {Tab, Button, Media, Dropdown, Nav, Card, Col} from 'react-bootstrap';
import TextField from "@material-ui/core/TextField";
import {DropzoneArea} from 'material-ui-dropzone';
import CustomMentionEditor from "../../components/customMentionEditor/customMentionEditor";
import CustomDropzone from "../../components/customDropzone/customDropzone";
import Datasource from "../../data/datasource";
import CircularProgress from '@material-ui/core/CircularProgress';
import ListItem from "../../layout/sideBar";

const CreateFeedModal = (props) => {
    const {onArticleCreated, onHideTransactionModal} = props;

    const [marketList, setMarketList] = React.useState(null);
    const [isLoading, setIsLoading] = React.useState(false);
    const [articleContent, setArticleContent] = React.useState(false);
    const [articleMarketData, setArticleMarketData] = React.useState({
        ArticleLinkMarket1: '',
        ArticleLinkMarket2: '',
        ArticleLinkMarket3: ''
    });
    const [articleImageData, setArticleImageData] = React.useState({
        Graphic1: {},
        Graphic2: {},
        Graphic3: {}
    });

    useEffect(() => {
        console.log("graphic1graphic1", articleImageData);
    }, [articleImageData]);

    function Loading() {
        if (isLoading) {
            return (
                <div style={{display: 'table', margin: '20px auto 0'}}>
                    <CircularProgress isLoading={true} style={{margin: 'auto'}}/>
                </div>
            );
        } else {
            return null;
        }
    }

    async function getMarketRateList() {
        try {
            const response = await Datasource.shared.getMarketRateList();
            let tempMarketList = [];
            if (response && response.Data) {
                response.Data.ItemList.forEach(d => {
                    tempMarketList.push({name: d.Code});
                });
                setMarketList(tempMarketList);
            }
            console.log("tempMarketList", tempMarketList);
        } catch (e) {
            setMarketList([]);
        }
    }

    useEffect(() => {
        getMarketRateList();
    }, []);

    function mentionChange(propMention) {
        setArticleMarketData({
            ArticleLinkMarket1: propMention[0],
            ArticleLinkMarket2: propMention[1],
            ArticleLinkMarket3: propMention[2],
        });
    }

    function contentChange(propContent) {
        setArticleContent(propContent);
    }

    function imageChange(propImage) {
        let files = propImage;
        // setGraphic1(files[0]);
        setArticleImageData({
            Graphic1: files[0],
            Graphic2: files[1],
            Graphic3: files[2],
        });
    }

    async function postArticle() {
        const response = await Datasource.shared.postArticle(articleContent, articleImageData.Graphic1, articleImageData.Graphic2, articleImageData.Graphic3, articleMarketData.ArticleLinkMarket1, articleMarketData.ArticleLinkMarket2, articleMarketData.ArticleLinkMarket3);

        if (response) {
            if (response.Code === 1) {
                console.log(response.Message);
                onArticleCreated(response.Message);
                onHideTransactionModal();
            }
        }
    }

    if (!marketList) {
        return (
            <div style={{display: 'table', margin: '20px auto 0'}}>
                <CircularProgress isLoading={true} style={{margin: 'auto'}}/>
            </div>
        );
    }

    return (
        <React.Fragment>
            <Loading/>
            <div style={{padding: 20}}>
                <div>
                    <CustomMentionEditor data={marketList} onMentionChange={mentionChange}
                                         onContentChange={contentChange}/>
                </div>
                <CustomDropzone onImageChange={imageChange}/>
                <Button variant="primary" className={'mt-5 ml-auto mr-auto d-table'} onClick={postArticle}>
                    <span className={'noMargin'}>POST</span>
                </Button>
            </div>
        </React.Fragment>
    );
};

export default CreateFeedModal;
