const request = require('supertest')
const express = require('express')

const app = express()

app.get('/', function(req, res){
  res.status(200).json({greeting: 'hello world!'})
})

request(app)
.get('/')
.expect(400)
.end(function(err, res){
  if(err) throw err
})
