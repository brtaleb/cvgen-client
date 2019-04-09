import React from 'react'

const DefaultField = ({fieldType, children}) => {
    return (
        <div className="DefaultField">
            <div className="fieldHeader handle">
                {fieldType}
            </div>
            <div className="fieldContent">
                {children}
            </div>
        </div>
    )
};
export default DefaultField;

/*
* content: {
*       simpleList: ["el1", "el2", "el3"...],
*       detailedList: [{
*                   date: "DD/MM/YYYY - DD/MM/YYYY",
*                   title: "title",
*                   subtitle: "subtitle",
*                   summary: "summary
*                   },
*                   {...}]
* }
*/