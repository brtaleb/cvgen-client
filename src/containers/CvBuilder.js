import React from 'react'
import SideBar from "../components/SideBar";
import BuilderBody from "../components/BuilderBody";

const CvBuilder = ({profilData}) => {

   return (
       <div className="CvBuilder">
          <SideBar/>
          <BuilderBody profilData={profilData}/>
       </div>
   )
};
export default CvBuilder;