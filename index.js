import express from 'express'
import routes from './routes'

const app = express()

app.use(express.json());

app.use('/api', routes)

app.get('/', (_,res) => {
  res.send('Hello! This is the expected')
})

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})
