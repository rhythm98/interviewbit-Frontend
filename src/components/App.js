import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import './App.css'
import AddMeeting from './AddMeeting'
import EditMeeting from './EditMeeting'
import Header from './Header'
import MeetingList from './MeetingList'

import api from '../api/meetings' // axios

function App() {
  const [meetings, setMeetings] = useState([])

  const retrieveMeetings = async () => {
    const response = await api.get('/meetings')
    return response.data
  }

  const addMeetingHandler = async (meeting) => {
    const request = { ...meeting }
    const response = await api.post('/meetings', request)
    console.log(response)
    setMeetings([...meetings, response.data])
  }

  const updateMeetingHandler = async (id /*{id,updateData}*/) => {
    const response = await api.put(`/meetings/${id}`)
    setMeetings(
      meetings.map((meeting) =>
        meeting._id === id ? { ...response.data } : meeting
      )
    )
  }

  const removeMeetingHandler = async (id) => {
    await api.delete(`/meetings/${id}`)
    const newMeetingList = meetings.filter((meeting) => meeting._id !== id)
    setMeetings(newMeetingList)
  }

  useEffect(() => {
    const getAllMeetings = async () => {
      const allMeetings = await retrieveMeetings()
      if (allMeetings) setMeetings(allMeetings)
    }
    getAllMeetings()
  }, [])

  useEffect(() => {}, [meetings])

  // const [searchField, setSearchField] = useState([])
  // For search bar, make api call for particular meeting title or email id of users, since pagination ho rakha hoga in frontend, apply aggregation in database
  // const getFilteredList = async (key) => {
  //   const response = await api.get('/meetings/:key')
  //   console.log(response.data);
  //   return response.data
  // }
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
        {/*  Search Bar Functioanlity - React Component  <>
          <label for='site-search'>Search Meeting:</label>
          <input
            onChange={(e) => {
              setSearchField(e.target.value)
              {
                console.log(searchField)
              }
            }}
            type='search'
            id='search'
            name='searchField'
          />

          <button onClick={getFilteredList}>Search</button>
        </> */}

        <Routes>
          <Route
            path='/schedule'
            element={<AddMeeting addMeetingHandler={addMeetingHandler} />}
          />
          <Route
            path='/edit/:id'
            element={
              <EditMeeting
                updateMeetingHandler={updateMeetingHandler}
                meetings={meetings}
              />
            }
          />
          {/* Search Bar Functionality - Route
          <Route
            path='/:key'
            element={
              <MeetingList
                meetings={meetings}
                key={searchField}
                getFilteredMeetings={getFilteredList}
                getMeetingIdForRemove={removeMeetingHandler}
                getMeetingIdForUpdate={updateMeetingHandler}
              />
            } 
          /> */}
          <Route
            path='/'
            exact
            element={
              <MeetingList
                meetings={meetings}
                getMeetingIdForRemove={removeMeetingHandler}
                getMeetingIdForUpdate={updateMeetingHandler}
              />
            }
          />
        </Routes>
      </Router>
    </div>
  )
}

export default App
