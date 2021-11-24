import * as React from 'react'
import TextField from '@mui/material/TextField'
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import LocalizationProvider from '@mui/lab/LocalizationProvider'
import DatePicker from '@mui/lab/DatePicker'

export default function PickDate(props) {
  // const [value, setValue] = React.useState(null)

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        // label='Select Date'
        value={props.date}
        onChange={(newValue) => {
         props.updateDate(props.type,newValue)
        }}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
  )
}