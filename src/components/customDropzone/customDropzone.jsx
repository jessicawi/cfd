import React, {Component} from "react";
import {Tab, Button, Media, Dropdown, Nav, Card} from 'react-bootstrap';
import {DropzoneArea} from 'material-ui-dropzone';
import {EditorState} from "draft-js";
import "./customDropzone.css";

export default class DropzoneDialogExample extends Component {

    constructor(props) {
        super(props);
    }

    state = {
        open: false,
        files: []
    };

    handleClose = () => {
        this.setState({
            open: false
        });
    };

    handleChange = (files) => {
        //Saving files to state for further use and closing Modal.
        this.props.onImageChange(files);
console.log(files,'0000000000')
        this.setState({
            files: files
        });
    };

    handleOpen = () => {
        this.setState({
            open: true,
        });
    };

    render() {

        return (
            <React.Fragment>
                <DropzoneArea
                    onChange={this.handleChange.bind(this)}
                    acceptedFiles={['image/jpeg', 'image/png', 'image/gif']}
                    showPreviews={false}
                    maxFileSize={2000000}
                    dropzoneText="Upload Image"
                    className="dropzone"
                    filesLimit={3}
                />
            </React.Fragment>
        );
    }

};

