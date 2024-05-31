require('dotenv').config(); 
const dbconnect = require('./dbconnect')
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const axios = require('axios');

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());

dbconnect()

// Schema and model for activity
const activitySchema = new mongoose.Schema({
  eventType: String,
  username: String,
  repository: String,
  details: Object,
  createdAt: { type: Date, default: Date.now }
});
const Activity = mongoose.model('Activity', activitySchema);

// Webhook endpoint
app.post('/webhook', async (req, res) => {
  const eventType = req.headers['x-github-event'];
  const payload = req.body;

  if (eventType && payload) {
    const activity = new Activity({
      eventType,
      username: payload.sender.login,
      repository: payload.repository.full_name,
      details: payload
    });

    await activity.save();
    res.status(201).send('Event received and saved.');
  } else {
    res.status(400).send('Invalid event.');
  }
});

// Fetch all activities
app.get('/activities', async (req, res) => {
  const activities = await Activity.find();
  res.status(200).json(activities);
});

// Fetch activity by ID
app.get('/activities/:id', async (req, res) => {
  const activity = await Activity.findById(req.params.id);
  if (activity) {
    res.status(200).json(activity);
  } else {
    res.status(404).send('Activity not found.');
  }
});

// Fetch activities by username
app.get('/activities/user/:username', async (req, res) => {
  const activities = await Activity.find({ username: req.params.username });
  res.status(200).json(activities);
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
