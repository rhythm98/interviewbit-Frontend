import React from 'react'
import { Link } from 'react-router-dom'
const MeetingCard = (props) => {
  const {
    _id,
    date,
    startTime, //2012-04-23T18:25:43.511Z
    endTime, //2012-04-23T18:25:43.511Z
    interviewers,
    candidates,
    title,
    description,
  } = props.meeting //destructuring
  

  const formatDate = (date) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' }
    return new Date(date).toLocaleDateString('en-IN', options)
  }
  

  return (
    <div className='item'>
      <div className='content'>
        <div className='header'>{_id}</div>
        <div>{formatDate(date)}</div>
        <div>{startTime}</div>
        <div>{endTime}</div>
        <div>{candidates}</div>
        <div>{interviewers}</div>
        <div>{title}</div>
        <div>{description}</div>
      </div>
      <div>
        <Link
          to={{ pathname: `/edit/${_id}`, state: { meeting: props.meeting } }}

          // to={{ pathname: `/edit/${id}`, state: { meeting: props.meeting } }}
        >
          <i
            className='edit alternate outline icon'
            style={{ color: 'blue', marginTop: '7px', marginLeft: '10px' }}
            // onClick={() => props.editHandler(_id)}
          ></i>
        </Link>
        <i
          className='trash alternate outline icon'
          style={{ color: 'red', marginTop: '7px' }}
          onClick={() => props.deleteHandler(_id)}
        ></i>
      </div>
    </div>
  )
}

export default MeetingCard
