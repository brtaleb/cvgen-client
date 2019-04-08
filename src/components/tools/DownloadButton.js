import React from 'react'
import {Button, Icon} from "@material-ui/core";

const DownloadButton = ({downloadPdf, downloadDocx}) => {
    return (
        <div className="DownloadButtons">
            <Button
                onClick={downloadPdf}
                variant="contained"
                className="buttonRed" >
                <Icon>picture_as_pdf</Icon>
            </Button>

            <Button
                onClick={downloadDocx}
                variant="contained"
                className="buttonBlue">
                <Icon>folder_open</Icon>
            </Button>
        </div>
    )
};
export default DownloadButton;