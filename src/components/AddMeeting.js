import React from 'react'
import ReactCalendar from './ReactCalendar'

class AddMeeting extends React.Component {
  state = {
    timeCreated: '',
    startTime: '',
    endTime: '',
    interviewers: '',
    candidates: '',
    title: '',
    description: '',
    timezone: '',
  }
  add = (e) => {
    e.preventDefault() //to avoid page refresh on hitting button

    console.log(this.state);
    console.log("test comment");
    //validate field values
    if (this.state.timeCreated === '' || 
    this.state.startTime === '' || 
    this.state.endTime === '' || 
    this.state.interviewers === '' || 
    this.state.candidates === '' || 
    this.state.title === '' || 
    this.state.description === '' || 
    this.state.timezone === '') {
      alert('All fields are mandatory!')
      return
    }
    this.props.addMeetingHandler(this.state)
    this.setState({
      timeCreated: '',
      startTime: '',
      endTime: '',
      interviewers: '',
      candidates: '',
      title: '',
      description: '',
      timezone: '' })
    console.log(this.props)

    // this.props.history.push("/")// to redirect back to homepage

    // const { history } = this.props
    // history.push('/')

    // console.log(this.state)
  }

  render() {
    return (
      <div className='ui main'>
        <h2>Schedule an Interview</h2>
        <form className='ui form' onSubmit={this.add}>
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
          <button className='ui button green'>Schedule</button>
        </form>
      </div>
    )
  }
}

export default AddMeeting

