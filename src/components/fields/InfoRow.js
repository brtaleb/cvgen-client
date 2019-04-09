import React from 'react'

const InfoRow = ({formatedDate, title, subtitle, summary}) => {
    return (
        <div className="InfoRow">
            <div>{formatedDate}</div>
            <div><b>{title}</b></div>
            <div>{subtitle}</div>
            <div>{summary}</div>
        </div>
    )
};
export default InfoRow;