import React, {useEffect} from 'react'
import {detailedFields} from "../../config/fieldTypes";
import DefaultField from "./DefaultField";
import DetailedListElement from "./DetailedListElement";
import BasicListElement from "./BasicListElement";
import Sortable from "sortablejs";

const isDetailedField = (field) => {
   return detailedFields.includes(field.toUpperCase());
}

const FieldsMaker = ({fields, ref, handleOrderChange}) => {

   const rightContentRef = React.createRef();

   useEffect(() => {

      new Sortable(rightContentRef.current, {
         group: 'shared',
         handle: '.handle',
         animation: 250,
         ghostClass: 'ghost',
         draggable: '.draggable',
         onSort: handleOrderChange
      });
   })

   const defaultFields = [];

   for(let field in fields){
      console.log(fields[field]);

      let detailedList = null;

      if(fields[field]){
         if(isDetailedField(field)){
            detailedList = fields[field].map((el,index) => {
               return (
                   <DetailedListElement
                       key={index}
                       formatedDate={el.formatedDate}
                       title={el.title}
                       subtitle={el.subtitle}
                       summary={el.summary}
                   />
               )
            })
         }
         else {
            detailedList = fields[field].map((el,index) => {
               return (
                   <BasicListElement
                       key={index}
                       element={el.element}
                       details={el.details}
                   />
               )
            })
         }

         defaultFields.push(
             <DefaultField fieldType={field} key={field}>
                {detailedList}
             </DefaultField>
         )
      }
   }

   return (
       <div className="FieldsMaker cvRightDraggable" ref={rightContentRef}>
          {defaultFields}
       </div>
   )
};
export default FieldsMaker;