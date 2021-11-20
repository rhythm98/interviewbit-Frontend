import React from 'react'
// import { Link } from 'react-router-dom'
import MeetingCard from './MeetingCard'

const MeetingList = (props) => {
  console.log(props)

  const deleteMeetingHandler = (id) => {
    props.getMeetingId(id)
  }

  const renderMeetings = props.meetings.map((meeting) => {
    return <MeetingCard
      meeting={meeting}
      clickHandler={deleteMeetingHandler}
      key={meeting.id}/>
  })

  // const meetings = [
  //   {
  //     id: '1',
  //     name: 'Rhythm',
  //     email: 'rhyagr@gmail.com',
  //   },
  //   {
  //     id: '2',
  //     name: 'Ajit',
  //     email: 'ASR@gmail.com',
  //   },
  // ]
  // const renderMeetings = meetings.map((meeting) => {
  //   return (
  //     <MeetingCard
  //       meeting={meeting}
  //       clickHandler={deleteMeetingHandler}
  //       key={meeting.id}
  //     />
  //   )
  // })

  return (
    <div class='main'>
      <h2>
        Meetings
        {/* <Link to="/schedule">
          <button className='ui button blue right'>Add Meeting</button>
        </Link> */}
      </h2>

      <div className="ui search"><div className="ui input search"></div></div>
      <div className='ui celled list'>{renderMeetings}</div>
    </div>
  )
}

export default MeetingList
