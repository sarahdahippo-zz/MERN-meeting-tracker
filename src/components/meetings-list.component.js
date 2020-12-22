import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Collapse } from 'react-collapse';
import axios from 'axios'; // Axios library to send HTTP request to backed
import '../App.css';

export default class MeetingsList extends Component {
  constructor(props) {
    super(props);
    this.deleteMeeting = this.deleteMeeting.bind(this);
    this.toggleClass = this.toggleClass.bind(this);
    this.state = {
      meetings: [],
      activeIndex: null
    };
  }

  componentDidMount() {
    axios.get('http://localhost:5000/meetings/')
      .then(response => {
        this.setState({ meetings: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  toggleClass(index, e) {     
    this.setState({
      activeIndex: this.state.activeIndex === index ? null : index
    });
  };
  
  moreLess(index) {
    if (this.state.activeIndex === index) {
      return (
        <span>
          <i className='fas fa-angle-up'></i> Hide Meeting Minutes
        </span>
      );
    } else {
      return (
        <span>
          <i className='fas fa-angle-down'></i> Show Meeting Minutes
        </span>
      );                      
    }
}

  deleteMeeting(id) {
    axios.delete('http://localhost:5000/meetings/'+id)
      .then(response => { console.log(response.data)});

    this.setState({
      meetings: this.state.meetings.filter(el => el._id !== id)
    })
  }

  meetingList() {
    return this.state.meetings.map((currMeeting, index) => {
      return(
        <tr key={index}>
          <td>{currMeeting.username}</td>
          <td className="description">
            {currMeeting.description}<br/><br/>
            <Collapse isOpened={this.state.activeIndex === index}>
              <div className={`alert alert-info msg
                              ${this.state.activeIndex === index ? 'show' : 'hide'}
                    `}
              >
                {currMeeting.notes}
              </div>
            </Collapse>
            <button onClick={this.toggleClass.bind(this, index)}>
              {this.moreLess(index)}
            </button>
          </td>
          <td>{currMeeting.duration}</td>
          <td>{currMeeting.date.substring(0,10)}</td>
          <td>
            <Link to={"/edit/" + currMeeting._id}>edit</Link> | <button className='link-button text-primary'
                onClick={() => {this.deleteMeeting(currMeeting._id)}}>delete</button>
          </td>
        </tr>
      )
    })
  }

  render() {
    return (
      <div className="main">
        <h2>All Meetings</h2>
        <table className="table table-bordered">
          <thead className="thead-dark">
            <tr>
              <th>Username</th>
              <th>Description</th>
              <th>Duration (minutes)</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            { this.meetingList() }
          </tbody>
        </table>
      </div>
    )
  }
}