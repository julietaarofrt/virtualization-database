const express = require('express')
const db = require('./database')

const app = express()

app.set('port', process.env.PORT || 4000)

app.get('/resources', async (req, res) => {
  const resources = await db.query('SELECT * FROM resources')
  console.log(resources)
  return res.json(resources)
})

app.get('/student', async (req, res) => {
  const student = await db.query('SELECT * FROM student')
  console.log(student)
  return res.json(student)
})

app.listen(app.get('port'), () => {
  console.log('Server on port', app.get('port'))
})

// 22 y 80 443