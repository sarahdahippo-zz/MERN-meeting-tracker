import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'; // Axios library to send HTTP request to backed
import '../App.css';

const Meeting = props => (
  <tr>
    <td>{props.meeting.username}</td>
    <td>
      {props.meeting.description}
      <div className="meeting-notes">{props.meeting.notes}</div>
      {/*<button type="button" className="collapsible">Meeting Minutes</button>
      <div className="collapse-content">
        <p>{props.meeting.notes}</p>
      </div>*/}
    </td>
    <td>{props.meeting.duration}</td>
    <td>{props.meeting.date.substring(0,10)}</td>
    <td>
      <Link to={"/edit/"+props.meeting._id}>edit</Link> | <button className='link-button text-primary'
					onClick={() => { props.deleteMeeting(props.meeting._id) }}>delete</button>
    </td>
  </tr>
)

export default class MeetingsList extends Component {
  constructor(props) {
    super(props);
    this.deleteMeeting = this.deleteMeeting.bind(this);
    this.state = {
      meetings: []
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

  deleteMeeting(id) {
    axios.delete('http://localhost:5000/meetings/'+id)
      .then(response => { console.log(response.data)});

    this.setState({
      meetings: this.state.meetings.filter(el => el._id !== id)
    })
  }

  meetingList() {
    return this.state.meetings.map(currMeeting => {
      return <Meeting meeting={currMeeting} deleteMeeting={this.deleteMeeting} key={currMeeting._id}/>;
    })
  }

  render() {
    // var collapse = document.getElementsByClassName("collapsible");
    // for (let i = 0; i < collapse.length; i++) {
    //     collapse[i].addEventListener("click", function() {
    //     this.classList.toggle("active");
    //     var content = this.nextElementSibling;
    //     if (content.style.display === "block") {
    //       content.style.display = "none";
    //     } else {
    //       content.style.display = "block";
    //     }
    //   });
    // }
    return (
      <div>
        <h3>Logged Meetings</h3>
        <table className="table">
          <thead className="thead-light">
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