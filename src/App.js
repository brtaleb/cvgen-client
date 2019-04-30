import React, {useContext, useEffect} from 'react'
import './styles/index.scss'
import CvBuilder from "./containers/CvBuilder";
import {StoreContext} from "./context/StoreContext";

const App = () => {
   const {actions, state} = useContext(StoreContext);

   useEffect(() => {
      actions.getProfilData();
   }, [])

   return (
       <div className="App">
          <CvBuilder profilData={state.profilData}/>
       </div>
   )
};
export default App;