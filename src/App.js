import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from "./components/navbar.component";
import MeetingsList from "./components/meetings-list.component";
import EditMeeting from "./components/edit-meeting.component";
import CreateMeeting from "./components/create-meeting.component";
import CreateUser from "./components/create-user.component";

function App() {
  return (
		<Router>
			<div className="container">
				<Navbar />
				<br />
				<Route path='/' exact component={MeetingsList} />
				<Route path='/edit/:id' component={EditMeeting} />
				<Route path='/create' component={CreateMeeting} />
				<Route path='/user' component={CreateUser} />
			</div>
		</Router>
  );
}

export default App;
