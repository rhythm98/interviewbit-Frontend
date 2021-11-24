import React from 'react'
// import { Link } from 'react-router-dom'
import MeetingCard from './MeetingCard'


// export default function MeetingList(props) {}
const MeetingList = (props) => {
  console.log("key ",props.key)

  // const deleteHandler = (id) => {
  //   props.getMeetingIdForRemove(id)
  // }
  // const editHandler = (id) => {
  //   props.getMeetingIdForUpdate(id)
  // }
  const renderMeetings = props.meetings.map((meeting) => {
    return (
      <MeetingCard
        meeting={meeting}
        deleteHandler={props.getMeetingIdForRemove}
        editHandler={props.getMeetingIdForUpdate}
        key={meeting._id}
      />
    )
  })

  return (
    <div className='main'>
      <h2>Meetings</h2>
      {/* <div className='ui search'>
        <div className='ui input search'>Search Meeting</div>
      </div> */}
      <div className='ui celled list'>{renderMeetings}</div>
    </div>
  )
}

export default MeetingList
