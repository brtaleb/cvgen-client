import React from 'react'
import DownloadButton from "./tools/DownloadButton";
import OptionSelector from "./tools/OptionSelector";
import Divider from "./Divider";

import {fonts} from "../config/fonts"
import {themes} from "../config/themes";
import {fieldTypes} from "../config/fieldTypes";
import FieldToggle from "./tools/FieldToggle";
import PersonalInfoToggle from "./tools/PersonalInfoToggle";

const SideBar = () => {
    const downloadPdf = () => {
        console.log("downloadPdf");
    };

    const downloadDocx = () => {
        console.log("downloadDocx");
    };

    const selectFont = (selectedFont) => {
        console.log(selectedFont);
    }

    const selectTheme = (selectedTheme) => {
        console.log(selectedTheme);
    }

    const toggleField = (type, fieldSwitch) => {
        console.log(type, fieldSwitch);
    }

    const togglePersonalField = (type, personalField) => {
        console.log(type, personalField);
    }

    return (
        <div className="SideBar">
            <h1>Curriculum Vitae</h1>

            <DownloadButton
                downloadPdf={() => downloadPdf()}
                downloadDocx={() => downloadDocx()}
            />

            <Divider/>
            <PersonalInfoToggle
                togglePersonalField={(type, personalField) => togglePersonalField(type, personalField)}
            />

            <FieldToggle
                type={fieldTypes.EDUCATION}
                toggleField={(type, fieldSwitch) => toggleField(type, fieldSwitch)}
            /><br/>

            <FieldToggle
                type={fieldTypes.EXPERIENCE}
                toggleField={(type, fieldSwitch) => toggleField(type, fieldSwitch)}
            /><br/>

            <FieldToggle
                type={fieldTypes.CERTIFICATION}
                toggleField={(type, fieldSwitch) => toggleField(type, fieldSwitch)}
            />

            <Divider/>
            <OptionSelector
                type="Font"
                data={fonts}
                selectItem={(selectedFont) => selectFont(selectedFont)}
            /><br/>

            <OptionSelector
                type="Theme"
                data={themes}
                selectItem={(selectedTheme) => selectTheme(selectedTheme)}
            />


        </div>
    )
};
export default SideBar;