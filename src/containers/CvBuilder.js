import React, {useContext, useEffect} from 'react'
import SideBar from "../components/SideBar";
import BuilderBody from "../components/BuilderBody";
import {StoreContext} from "../context/StoreContext";

const CvBuilder = () => {

  const {actions, state} = useContext(StoreContext);

  useEffect(() => {
    actions.getProfilData();
  }, [])

  return (
    <div className="CvBuilder">
      <SideBar
        profilData={state.profilData}
        togglePersonalField={(type, checked) => actions.togglePersonalField({type, checked})}
        changeFont={(font) => actions.changeFont(font)}
      />

      <BuilderBody profilData={state.profilData} font={state.font}/>
    </div>
  )
};
export default CvBuilder;