import React, {Component, useEffect, useState, useRef} from 'react';
import {EditorState, convertToRaw} from 'draft-js';
import Editor from 'draft-js-plugins-editor';
import createMentionPlugin, {defaultSuggestionsFilter} from 'draft-js-mention-plugin';
import Alert from '@material-ui/lab/Alert';
import editorStyles from './customMentionEditor.css';
import './editor.css';
import 'draft-js/dist/Draft.css';
import Datasource from '../../data/datasource';
import {CONST_ICON} from "../imageList";
import {isEmpty} from "lodash";
import CircularProgress from "../../pages/00-Login/login";

// const FAKE_DATA = [
//     {
//         name: 'Matthew Russell',
//     },
//     {
//         name: 'Julian Krispel-Samsel',
//         link: 'https://twitter.com/juliandoesstuff',
//         avatar: 'https://avatars2.githubusercontent.com/u/1188186?v=3&s=400',
//     },
//     {
//         name: 'Jyoti Puri',
//         link: 'https://twitter.com/jyopur',
//         avatar: 'https://avatars0.githubusercontent.com/u/2182307?v=3&s=400',
//     },
//     {
//         name: 'Max Stoiber',
//         link: 'https://twitter.com/mxstbr',
//         avatar: 'https://pbs.twimg.com/profile_images/763033229993574400/6frGyDyA_400x400.jpg',
//     },
//     {
//         name: 'Nik Graf',
//         link: 'https://twitter.com/nikgraf',
//         avatar: 'https://avatars0.githubusercontent.com/u/223045?v=3&s=400',
//     },
//     {
//         name: 'Pascal Brandt',
//         link: 'https://twitter.com/psbrandt',
//         avatar: 'https://pbs.twimg.com/profile_images/688487813025640448/E6O6I011_400x400.png',
//     },
// ];
// let tempMarketList = [];
//
// const getSuggestionList = async () => {
//     const response = await Datasource.shared.getMarketRateList();
//     response.Data.ItemList.forEach(d => {
//         tempMarketList.push(d.Code);
//     });
// };
//
// const mentions = tempMarketList;
// console.log(mentions,'xxxxxxxxxxxxxxx');

const positionSuggestions = ({state, props}) => {
    let transform;
    let transition;

    if (state.isActive && props.suggestions.length > 0) {
        transform = 'scaleY(1)';
        transition = 'all 0.25s cubic-bezier(.3,1.2,.2,1)';
    } else if (state.isActive) {
        transform = 'scaleY(0)';
        transition = 'all 0.25s cubic-bezier(.3,1,.2,1)';
    }

    return {
        transform,
        transition,
    };
};


export default class CustomMentionEditor extends Component {

    constructor(props) {
        super(props);
        this.mentionPlugin = createMentionPlugin({
            positionSuggestions,
            mentionTrigger: '$',
            mentionPrefix: '$',
            entityMutability: "IMMUTABLE",
            mentionComponent: (mentionProps) => (
                <span
                    className={mentionProps.className}
                    // eslint-disable-next-line no-alert
                    onClick={() => alert('Clicked on the Mention!')}
                >
          {mentionProps.children}
        </span>
            ),
        });
    }

    state = {
        editorState: EditorState.createEmpty(),
        suggestions: this.props.data,
        suggestionsClone: this.props.data,
        currentContent: [],
        isMentionsExceed: false,
    };

    onChange = (editorState) => {
        this.setState({
            editorState: editorState,
        });
        this.getEditorContent();
        this.getMentionContent();
    };

    onSearchChange = ({value}) => {
        this.setState({
            suggestions: defaultSuggestionsFilter(value, this.state.suggestionsClone),
        });
    };

    focus = () => {
        this.editor.focus();
    };

    getEditorContent = () => {
        const contentState = this.state.editorState.getCurrentContent();
        const editorContentRaw = convertToRaw(contentState);
        const currentContent = editorContentRaw.blocks[0].text;
        this.props.onContentChange(currentContent);
    };

    getMentionContent = () => {
        const contentState = this.state.editorState.getCurrentContent();
        const editorContentRaw = convertToRaw(contentState);
        if (!isEmpty(editorContentRaw.entityMap)) {
            const content = editorContentRaw.entityMap;
            const finalContent = Object.keys(content).map(key =>
                content[key].data.mention.name
            );
            if (finalContent.length > 3) {
                this.setState({
                    isMentionsExceed: true
                });
            }
            this.setState({
                currentContent: finalContent
            });
            this.props.onMentionChange(finalContent);

        }
    };

    render() {
        const {MentionSuggestions} = this.mentionPlugin;
        const plugins = [this.mentionPlugin];
        const IsAlert = () => {
            if (this.state.isMentionsExceed) {
                return (
                    <Alert severity="error">Only 3 Market Rate is Allowed</Alert>
                );
            }else{
                return null;
            }
        };

        return (
            <div>
                <IsAlert/>
                <div className="editor" onClick={this.focus}>
                    <Editor
                        editorState={this.state.editorState}
                        onChange={this.onChange}
                        placeholder="Share your thoughts"
                        plugins={plugins}
                        ref={(element) => {
                            this.editor = element;
                        }}
                    />
                    <MentionSuggestions
                        onSearchChange={this.onSearchChange}
                        suggestions={this.state.suggestions}
                        entryComponent={Entry}
                    />
                </div>
            </div>
        );
    }
}


const Entry = (props) => {
    const {
        mention,
        theme,
        searchValue, // eslint-disable-line no-unused-vars
        isFocused, // eslint-disable-line no-unused-vars
        ...parentProps
    } = props;

    return (
        <div {...parentProps}>
            <div className={theme.mentionSuggestionsEntryContainer}>
                {/*<div className={theme.mentionSuggestionsEntryContainerLeft}>*/}
                {/*<img*/}
                {/*src={mention.avatar}*/}
                {/*className={theme.mentionSuggestionsEntryAvatar}*/}
                {/*role="presentation"*/}
                {/*/>*/}
                {/*</div>*/}
                <div className={theme.mentionSuggestionsEntryContainerRight}>
                    <div className={theme.mentionSuggestionsEntryText}>
                        {mention && mention.name}
                    </div>
                    {/*<div className={theme.mentionSuggestionsEntryTitle}>*/}
                    {/*{mention.title}*/}
                    {/*</div>*/}
                </div>
            </div>
        </div>
    );
};

