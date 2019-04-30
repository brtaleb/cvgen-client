import React from 'react'

const DefaultField = ({fieldType, children}) => {
   return (
       <div className="DefaultField draggable">
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