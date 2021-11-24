import * as React from 'react'
import OutlinedInput from '@mui/material/OutlinedInput'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import ListItemText from '@mui/material/ListItemText'
import Select from '@mui/material/Select'
import Checkbox from '@mui/material/Checkbox'

const ITEM_HEIGHT = 48
const ITEM_PADDING_TOP = 8
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
}

export default function MultipleSelectUsers(props) {
  // console.log('MultipleSelectUsers: ' + props.users)

  // const [personName, setPersonName] = React.useState([])
  const [users, setUsers] = React.useState([])

  const handleChange = (event) => {
    const val = event.target.value
    props.updateUsers(props.type, typeof val === 'string' ? val.split(',') : val)
  }

  const getUsers = async () => {
    fetch('http://localhost:2323/users', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => setUsers(data))
  }
  React.useEffect(() => {
    getUsers()
  }, [])
  
  console.log(users);
  return (
    <div>
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id='demo-multiple-checkbox-label'>Candidates</InputLabel>
        <Select
          labelId='demo-multiple-checkbox-label'
          id='demo-multiple-checkbox'
          multiple
          value={props.users}          
          onChange={handleChange}          
          input={<OutlinedInput label='Tag' />}
          renderValue={(selected) => selected.join(', ')}
          MenuProps={MenuProps}
        >
          {users
            .filter((name) => name.role === props.type)
            .map(
              (
                name //index or emailID since its unique or usersID(best) : SEE BELOW
              ) => (
                <MenuItem key={name.emailID} value={name.emailID}>
                  <Checkbox checked={props.users.indexOf(name.emailID) > -1} />
                  <ListItemText
                    primary={`${name.firstName}: ${name.emailID}`}
                  />
                </MenuItem>
              )
            )}
        </Select>
      </FormControl>
      {console.log(users)}
    </div>
  )
}

/*users.map((name, i) => (//i is for index
    < MenuItem key = {i} value = {name._id} >*/
