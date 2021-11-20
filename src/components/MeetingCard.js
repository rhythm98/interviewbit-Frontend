import React from 'react'
import { Link } from 'react-router-dom'
const MeetingCard = (props) => {
  const {
    timeCreated,
    startTime,
    endTime,
    interviewers,
    candidates,
    title,
    description,
    timezone,
  } = props.meeting //destructuring
  return (
    <div className='item'>
      <div className='content'>
        <Link
          to={{
            // pathname: `/meetings/${id}`,
            state: { meeting: props.meeting },
          }}
        >
          <div className='header'>{timeCreated}</div>
          <div>{startTime}</div>
          <div>{endTime}</div>
          <div>{candidates}</div>
          <div>{interviewers}</div>
          <div>{title}</div>
          <div>{description}</div>
          <div>{timezone}</div>
        </Link>
      </div>
      <i
        className='trash alternate outline icon'
        style={{ color: 'red', marginTop: '7px', marginLeft: '10px' }}
        // onClick={() => props.clickHandler(id)}
      ></i>
      {/* <Link to={{ pathname: `/edit/${id}`, state: { meeting: props.meeting } }}> */}
        <i
          className='edit alternate outline icon'
          style={{ color: 'blue', marginTop: '7px' }}
        ></i>
      {/* </Link> */}
    </div>
  )
}

export default MeetingCard
