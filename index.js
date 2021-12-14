const express = require('express');
const app = express();
const cors = require('cors');
const Member = require('./models/member');

app.get('/members', cors(), async (_req, res) => {
  try {
    const membersWithSubscriptionDetails = await Member.fetchAll({withRelated: ['subscription']})
    return res.json({error: false, data: membersWithSubscriptionDetails.toJSON()})

  } catch (err) {
    return res.status(500).json({error: true, error: err})
  }
});


const port = process.env.PORT || 3000;

app.listen(port, () => console.log('App listening on port: ' + port));

module.exports = app;
