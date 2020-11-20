import express from 'express'
import dotenv from 'dotenv'
import helmet from 'helmet'

dotenv.config()
const app = express()
app.use(helmet())
const port = process.env.PORT

// place holder for the data
const users = ['Gabbe']

app.get('/api/users', (req, res) => {
  console.log('api/users called!!!!')
  res.json(users)
})

app.post('/api/user', (req, res) => {
  const user = req.body.user
  console.log('Adding user::::::::', user)
  users.push(user);
  res.json("user addedd")
})

app.get('/', (req,res) => {
    res.send('App Works !!!!')
})

app.listen(port, () => {
    console.log(`Server listening on the port::${port}`)
})
