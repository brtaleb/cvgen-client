import React, {useEffect} from 'react'
import {detailedFields} from "../../config/fieldTypes";
import DefaultField from "./DefaultField";
import DetailedListElement from "./DetailedListElement";
import BasicListElement from "./BasicListElement";
import Sortable from "sortablejs";

const isDetailedField = (field) => {
  return detailedFields.includes(field.toUpperCase());
}

const FieldsMaker = ({fields, handleOrderChange, rightField}) => {

  const rightContentRef = React.createRef();
  const leftContentRef = React.createRef();

  useEffect(() => {
    rightField ?
      new Sortable(rightContentRef.current, {
        group: 'shared',
        handle: '.handle',
        animation: 250,
        ghostClass: 'ghost',
        draggable: '.draggable',
        onSort: handleOrderChange
      })

      :

      new Sortable(leftContentRef.current, {
        group: 'shared',
        handle: '.handle',
        animation: 250,
        ghostClass: 'ghost',
        draggable: '.draggable',
        onSort: handleOrderChange
      });
  })

  const defaultFields = [];

  for (let field in fields) {

    let detailedList = null;

    if (fields[field]) {
      if (isDetailedField(field)) {
        detailedList = fields[field].map((el, index) => {
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
      } else {
        detailedList = fields[field].map((el, index) => {
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
    <>
      {
        rightField ?
          <div className="FieldsMaker cvRightDraggable" ref={rightContentRef}>
            {defaultFields}
          </div>
          :
          <div className="FieldsMaker cvLeftDraggable" ref={leftContentRef}>
            {defaultFields}
          </div>
      }
    </>
  )
};
export default FieldsMaker;