import React from 'react'
import api from '../api/meetings' // axios
// import ReactCalendar from './ReactCalendar'
import PickTime from './PickTime'
import PickDate from './PickDate'
import MultipleSelectUsers from './UsersDropDownList'
class AddMeeting extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      date: new Date(),
      startTime: new Date(),
      endTime: new Date(),
      interviewers: [],
      candidates: [],
      title: '',
      description: '',
    }
    this.handleField = this.handleField.bind(this)
    this.handleMultipleUsersField = this.handleMultipleUsersField.bind(this)
  }

  add = (e) => {
    e.preventDefault() //to avoid page refresh on hitting button

    // console.log('POST: ',this.state)
    // console.log('test comment')

    //validate field values
    if (
      this.state.date === '' ||
      this.state.startTime === '' ||
      this.state.endTime === '' ||
      this.state.interviewers === '' ||
      this.state.candidates === '' ||
      this.state.title === '' ||
      this.state.description === ''
    ) {
      alert('All fields are mandatory!')
      return
    }
    this.props.addMeetingHandler(this.state)
    this.setState({
      date: '',
      startTime: '',
      endTime: '',
      interviewers: '',
      candidates: '',
      title: '',
      description: '',
    })
    window.location.href = '/' // to redirect back to homepage

    // this.props.history.push("/")// to redirect back to homepage
    // const { history } = this.props
    // history.push('/')

    // console.log(this.state)
  }

  handleMultipleUsersField = (type, value) => {
    if (type === 'Interviewer') {
      this.setState((prevState) => {
        return { ...prevState, interviewers: value }
      })
    } else if (type === 'Candidate') {
      this.setState((prevState) => {
        return { ...prevState, candidates: value }
      })
    }
  }

  handleField = (type, value) => {
    if (type === 'startTime') {
      this.setState((prevState) => {
        return { ...prevState, startTime: value }
      })
    } else if (type === 'endTime') {
      this.setState((prevState) => {
        return { ...prevState, endTime: value }
      })
    } else if (type === 'date') {
      this.setState((prevState) => {
        return { ...prevState, date: value }
      })
    }
  }

  render() {
    console.log(this.state)
    return (
      <div className='ui main'>
        <h2>Schedule an Interview</h2>
        <form className='ui form' onSubmit={this.add}>
          {/* <ReactCalendar /> */}
          <div className='field'>
            <label>Date</label>

            <PickDate
              type='date'
              date={this.state.date}
              updateDate={this.handleField}
            />
          </div>
          <div className='field'>
            <label>Start Time</label>
            <PickTime
              type='startTime'
              time={this.state.startTime}
              updateTime={this.handleField}
            />
          </div>
          <div className='field'>
            <label>End Time</label>
            <PickTime
              type='endTime'
              time={this.state.endTime}
              updateTime={this.handleField}
            />
          </div>
          <div className='field'>
            <label>Interviewers</label>
            <MultipleSelectUsers
              type='Interviewer'
              users={this.state.interviewers}
              updateUsers={this.handleMultipleUsersField}
            />
          </div>
          <div className='field'>
            <label>Candidates</label>
            <MultipleSelectUsers
              type='Candidate'
              users={this.state.candidates}
              updateUsers={this.handleMultipleUsersField}
            />
          </div>
          <div className='field'>
            <input
              type='text'
              name='title'
              placeholder='Title'
              value={this.state.title}
              onChange={(e) => this.setState({ title: e.target.value })}
            />
          </div>
          <div className='field'>
            <input
              type='text'
              name='description'
              placeholder='description'
              value={this.state.description}
              onChange={(e) => this.setState({ description: e.target.value })}
            />
          </div>
          <button className='ui button green'>Schedule</button>
        </form>
      </div>
    )
  }
}
export default AddMeeting
