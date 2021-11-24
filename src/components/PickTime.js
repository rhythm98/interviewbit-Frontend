import * as React from 'react'
import TextField from '@mui/material/TextField'
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import LocalizationProvider from '@mui/lab/LocalizationProvider'
import TimePicker from '@mui/lab/TimePicker'

export default function PickTime(props) {
  // const [value, setValue] = React.useState(null)


  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <TimePicker
        // label='Select Time'
        value={props.time}
        onChange={(newValue) => {
          props.updateTime(props.type,newValue)
        }}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
  )
}
