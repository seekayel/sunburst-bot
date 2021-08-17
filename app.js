const express = require('express')
const {getPrediction} = require('./sunburst')
const app = express()

app.use('*', async (req,res) => {
  var prediction = await getPrediction()
  res.json(prediction).end()
})

module.exports = app
