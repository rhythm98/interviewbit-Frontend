import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

// import ReactCalendar from './ReactCalendar'
import api from '../api/meetings' // axios
import PickTime from './PickTime'
import PickDate from './PickDate'
import MultipleSelectUsers from './UsersDropDownList'

function EditMeeting(props) {
  console.log(props)
  const params = useParams() //props.location.state.meeting
  // console.log(params)
  let meeting = props.meetings.filter((meeting) => meeting._id === params.id)
  // console.log(meeting);
  meeting = meeting[0]
  const [date, setDate] = useState([])
  const [startTime, setStartTime] = useState([])
  const [endTime, setEndTime] = useState([])
  const [candidates, setCandidates] = useState([])
  const [interviewers, setInterviewers] = useState([])
  const [title, setTitle] = useState([])
  const [description, setDescription] = useState([])
  useEffect(() => {
    setDate(meeting.date)
    setStartTime(meeting.startTime)
    setEndTime(meeting.endTime)
    setCandidates(meeting.candidates)
    setInterviewers(meeting.interviewers)
    setTitle(meeting.title)
    setDescription(meeting.description)
  }, []) //<--- Line 32:6:  React Hook useEffect has missing dependencies: 'meeting.candidates', 'meeting.date', 'meeting.description', 'meeting.endTime', 'meeting.interviewers', 'meeting.startTime', and 'meeting.title'. Either include them or remove the dependency array  react-hooks/exhaustive-deps
  // console.log("test: ",candidates)
  // console.log('test: ', interviewers)

  const update = (e) => {
    e.preventDefault() //to avoid page refresh on hitting button
    if (
      date === '' ||
      startTime === '' ||
      endTime === '' ||
      interviewers === '' ||
      candidates === '' ||
      title === '' ||
      description === ''
    ) {
      alert('All fields are mandatory!')
      return
    }
    // props.updateMeetingHandler({id,date})
    // {props.editHandler(_id)}

    // this.props.updateMeetingHandler(this.state.meeting._id)
    // this.setState({
    //   date: '',
    //   startTime: '',
    //   endTime: '',
    //   interviewers: '',
    //   candidates: '',
    //   title: '',
    //   description: '',
    // })
    // window.location.href = '/'
    // console.log(this.props)

    // this.props.history.push("/")// to redirect back to homepage

    // const { history } = this.props
    // history.push('/')

    // console.log(this.state)
  }

  const handleMultipleUsersField = (type, value) => {
    if (type === 'Interviewer') {
      setInterviewers(value)//return { ...prevState, interviewers: value }
    } else if (type === 'Candidate') {
      setCandidates(value) //return { ...prevState, candidates: value }
    }
  }
  const handleField = (type, value) => {
    if (type === 'startTime') {
      setStartTime(value) //return { ...prevState, startTime: value }
    } else if (type === 'endTime') {
      setEndTime(value) //return { ...prevState, endTime: value }
    } else if (type === 'date') {
      setDate(value) //return { ...prevState, date: value }
    }
  }

  return (
    <div className='ui main'>
      <h2>Update an Interview</h2>
      <form className='ui form' onSubmit={update}>
        <div className='field'>
          <label>Date</label>
          <PickDate type='date' date={date} updateDate={handleField} />
        </div>
        <div className='field'>
          <label>Start Time</label>
          <PickTime
            type='startTime'
            time={startTime}
            updateTime={handleField}
          />
        </div>
        <div className='field'>
          <label>End Time</label>
          <PickTime type='endTime' time={endTime} updateTime={handleField} />
        </div>
        <div className='field'>
          <label>Interviewers</label>
          <MultipleSelectUsers
            type='Interviewer'
            users={interviewers}
            updateUsers={handleMultipleUsersField}
          />
        </div>
        <div className='field'>
          <label>Candidates</label>
          <MultipleSelectUsers
            type='Candidate'
            users={candidates}
            updateUsers={handleMultipleUsersField}
          />
        </div>
        <div className='field'>
          <input
            type='text'
            name='title'
            placeholder='Title'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className='field'>
          <input
            type='text'
            name='description'
            placeholder='description'
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <button className='ui button blue'>Update</button>
      </form>
    </div>
  )
}
export default EditMeeting
