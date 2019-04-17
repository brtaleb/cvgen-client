import React from 'react'

const ImageField = ({imgSrc}) => {
    return (
        <div className="ImageField">
            <img src={window.location.origin + imgSrc} alt="profil_image"/>
        </div>
    )
};
export default ImageField;