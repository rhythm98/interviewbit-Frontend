import React, { useState, useEffect } from 'react'
import {
  BrowserRouter as Router,
  // Switch, //v6 replaced Switch to Routes
  Route,
  Routes,
  Link,
  // Outlet,
} from 'react-router-dom'
// import { uuid } from 'uuidv4'
import './App.css'
import AddMeeting from './AddMeeting'
import EditMeeting from './EditMeeting'
import Header from './Header'
import MeetingList from './MeetingList'
import api from '../api/meetings'

function App() {
  // const LOCAL_STORAGE_KEY = 'meetings'
  const [meetings, setMeetings] = useState([])

  const retrieveMeetings=async()=>{
    const response=await api.get("/meetings")
    return response.data
  }

  const addMeetingHandler = async(meeting) => {
    console.log(meeting)
    const request={
      // id:uuid(),
      ...meeting
    }
    const response=await api.post("/meetings",request)
    console.log(response);
    setMeetings([...meetings, response.data])
  }
    // const updateMeetingHandler = async (meeting) => {
    //   // console.log(meeting)

    //   const response = await api.put(`/meetings/${meeting.id}`, meeting)

    //   console.log(response.data)
    //   const {timeCreated,startTime,endTime,interviewers,candidates,title,description,timezone}=response.data
    //   setMeetings(meetings.map((meeting)=>{
    //     return meeting.id===id ? {...response.data}:meeting
    //   }))
    // }

  const removeMeetingHandler = async(id) => {
    await api.delete(`/meetings/${id}`)
    const newMeetingList = meetings.filter((meeting) => {
      return meeting.id !== id
    })
    setMeetings(newMeetingList)
  }

  useEffect(() => {
    // const retrieveMeetings = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    // if (retrieveMeetings) setMeetings(retrieveMeetings)
    const getAllMeetings=async()=>{
      const allMeetings=await retrieveMeetings()
      if(allMeetings)setMeetings(allMeetings)
    }
    getAllMeetings()
  }, [])

  useEffect(() => {
    // localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(meetings))
  }, [meetings])

  return (
    <div className='App ui container'>
      <Router>
        <Header />
        <nav style={{ margin: 60 }}>
          <Link to='/' style={{ padding: 20 }}>
            Meetings
          </Link>
          <Link to='/schedule' style={{ padding: 20 }}>
            Schedule an Interview
          </Link>
        </nav>
        <Routes>
          <Route
            path='/schedule'
            element={
              <AddMeeting addMeetingHandler={addMeetingHandler} />
            } /*render/component*/
          />
          <Route
            path='/edit'
            element={
              <EditMeeting /*updateMeetingHandler={updateMeetingHandler}*/ />
            } /*render/component*/
          />
          <Route
            path='/'
            exact
            element={
              <MeetingList
                meetings={meetings}
                getMeetingId={removeMeetingHandler}
              />
            }
          />   
        </Routes>
      </Router>
    </div>
  )
}

export default App
