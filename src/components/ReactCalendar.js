// import React, { useState } from 'react'
// import Calendar from 'react-calendar'
// import 'react-calendar/dist/Calendar.css'

// const ReactCalendar = () => {
//   const [date, setDate] = useState(new Date())
//   const onChange = (date) => {
//     setDate(date)
//   }
//   return (
//     <div>
//       <Calendar
        
//         onChange={onChange}
//         value={date} /*(locale,date)=>formatDate(date,'dd MMM YYYY')*/
//       />
//       {date.toString()}
//     </div>

//   )
// }

// export default ReactCalendar


import React from 'react'
import TextField from '@material-ui/core/TextField'

const ReactCalendar = () => {
  return (
    <div
      style={{
        margin: 'auto',
        display: 'block',
        width: 'fit-content',
      }}
    >
      <label>Select Date</label>
      <TextField
        id='date'
        // label='Choose your birthdate'
        type='date'
        // defaultValue='2017-05-24'
        InputLabelProps={{
          shrink: true,
        }}
      />
    </div>
  )
}

export default ReactCalendar
