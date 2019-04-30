import React, {useLayoutEffect, useRef, useState} from 'react'
import TextareaAutosize from 'react-autosize-textarea'

const DetailedListElement = ({formatedDate, title, subtitle, summary, inputChange}) => {
   const [state, setState] = useState({
      formatedDate: formatedDate,
      title: title,
      subtitle: subtitle,
      summary: summary
   })

   // const firstUpdate = useRef(true);
   // useLayoutEffect(() => {
   //    if (firstUpdate.current) {
   //       firstUpdate.current = false;
   //       return;
   //    }
   //    inputChange(state);
   // });

   const handleChange = (event) => {
      setState({
         ...state,
         [event.target.name]: event.target.value
      })
   }

   return (
       <div className="DetailedListElement">
          {state.formatedDate ?
              <TextareaAutosize
                  value={state.formatedDate}
                  name="formatedDate"
                  onChange={handleChange}
              >
                 {state.formatedDate}
              </TextareaAutosize> : null
          }


          {state.title ?
              <TextareaAutosize
                  className="titleInput"
                  value={state.title}
                  name="title"
                  onChange={handleChange}
              >
                 {state.title}
              </TextareaAutosize> : null
          }

          {state.subtitle ?
              <TextareaAutosize
                  value={state.subtitle}
                  name="subtitle"
                  onChange={handleChange}
              >
                 {state.subtitle}
              </TextareaAutosize> : null
          }

          {state.summary ?
              <TextareaAutosize
                  value={state.summary}
                  name="summary"
                  onChange={handleChange}
              >
                 {state.summary}
              </TextareaAutosize> : null
          }
       </div>
   )
};
export default DetailedListElement;