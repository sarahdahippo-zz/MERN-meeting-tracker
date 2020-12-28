# Meeting Tracker
A simple web-based application that allows users to create, edit, and delete meetings, and display all users' meeting logs.

### Screenshots
![Meetings List](/public/meetings.png)
![New Meeting](/public/newMeeting.png)

### What could it be useful for?
- Professors wanting a public platform for his/her class to schedule and view meetings with him/her or others
- Companies recording all employees' meetings and keeping all meetings transparent
- Transforming into other types of trackers, for example a meal tracker, class scheduler.

### Tech Stacks
- Backend
  - Node.js
  - Express.js
  - MongoDB with Mongoose
- Frontend
  - React
  - HTML5
  - CSS3
  - JavaScript
  - Bootstrap

### Running the server
1. `git clone` the repository and change directory into the `src` folder:
```
cd MERN-meeting-tracker/src
```
2. Install the modules `npm install` and run `npm start` to launch the development server in your web browser. It will be hosted at http://localhost:3000/.
4. In a new terminal (without closing the previous one), change directory into the `backend` folder:
```
cd MERN-meeting-tracker/backend
```
5. Install the modules `npm install` and run `nodemon server` to establish the MongoDB database connection. If you do not have `nodemon`, install it globally `npm install -g nodemon`.