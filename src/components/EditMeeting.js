import React from 'react'
import ReactCalendar from './ReactCalendar'

class EditMeeting extends React.Component {
  constructor(props){
    super(props)
    const {startTime,endTime,interviewers,candidates,title,description,timezone}=props.location.state.meeting
    this.state = {
      startTime,
      endTime,
      interviewers,
      candidates,
      title,
      description,
      timezone,
    }
  }
  update = (e) => {
    e.preventDefault() //to avoid page refresh on hitting button
    if (
      this.state.timeCreated === '' ||
      this.state.startTime === '' ||
      this.state.endTime === '' ||
      this.state.interviewers === '' ||
      this.state.candidates === '' ||
      this.state.title === '' ||
      this.state.description === '' ||
      this.state.timezone === ''
    ) {
      alert('All fields are mandatory!')
      return
    }
    this.props.updateMeetingHandler(this.state)
    this.setState({
      startTime: '',
      endTime: '',
      interviewers: '',
      candidates: '',
      title: '',
      description: '',
      timezone: '',
    })
    console.log(this.props)

    // this.props.history.push("/")// to redirect back to homepage

    // const { history } = this.props
    // history.push('/')

    // console.log(this.state)
  }

  render() {
    return (
      <div className='ui main'>
        <h2>Update an Interview</h2>
        <form className='ui form' onSubmit={this.update}>
          <div className='field'>
            <label>Start Time</label>
            <input
              type='text'
              name='startTime'
              placeholder='start time'
              value={this.state.startTime}
              onChange={(e) => this.setState({ startTime: e.target.value })}
            />
          </div>
          <div className='field'>
            <label>End Time</label>
            <input
              type='text'
              name='endTime'
              placeholder='end time'
              value={this.state.endTime}
              onChange={(e) => this.setState({ endTime: e.target.value })}
            />
          </div>
          <div className='field'>
            <label>Interviewers</label>
            <input
              type='text'
              name='interviewers'
              placeholder='interviewers'
              value={this.state.interviewers}
              onChange={(e) => this.setState({ interviewers: e.target.value })}
            />
          </div>
          <div className='field'>
            <label>Candidates</label>
            <input
              type='text'
              name='candidates'
              placeholder='candidates'
              value={this.state.candidates}
              onChange={(e) => this.setState({ candidates: e.target.value })}
            />
          </div>
          <div className='field ui input'>
            {/* <label>Email</label> */}
            <input
              type='text'
              name='title'
              placeholder='Title'
              value={this.state.title}
              onChange={(e) => this.setState({ title: e.target.value })}
            />
          </div>
          <div className='field ui input'>
            {/* <label>Email</label> */}
            <input
              type='text'
              name='description'
              placeholder='description'
              value={this.state.description}
              onChange={(e) => this.setState({ description: e.target.value })}
            />
          </div>
          <div className='field ui input'>
            {/* <label>Email</label> */}
            <input
              type='text'
              name='timezone'
              placeholder='timezone'
              value={this.state.timezone}
              onChange={(e) => this.setState({ timezone: e.target.value })}
            />
          </div>

          <ReactCalendar />
          <button className='ui button blue'>Update</button>
        </form>
      </div>
    )
  }
}

export default EditMeeting

