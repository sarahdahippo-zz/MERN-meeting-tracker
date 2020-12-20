const router = require('express').Router();
let Meeting = require('../models/meeting.model');

router.route('/').get((req, res) => {
	Meeting.find()
		.then(meetings => res.json(meetings))
		.catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
	const username = req.body.username;
	const description = req.body.description;
	const duration = Number(req.body.duration);
  const date = Date.parse(req.body.date);
  const notes = req.body.notes ? req.body.notes : '';

	const newMeeting = new Meeting({
		username,
		description,
		duration,
    date,
    notes,
	});
	newMeeting.save()
		.then(() => res.json('Meeting added!'))
		.catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Meeting.findById(req.params.id)
    .then(meeting => res.json(meeting))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Meeting.findByIdAndDelete(req.params.id)
    .then(() => res.json('Meeting deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  Meeting.findById(req.params.id)
    .then(meeting => {
      meeting.username = req.body.username;
      meeting.description = req.body.description;
      meeting.duration = Number(req.body.duration);
      meeting.date = Date.parse(req.body.date);
      meeting.notes = req.body.notes ? req.body.notes : '';

      meeting.save()
        .then(() => res.json('Meeting updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;