import express from 'express'
import cors from 'cors'
import routes from './src/routes/index.js'

const app = express();

app.use(express.json());
app.use(cors());

app.get('/', (req,res) => {
  res.json({
    message: 'hello from node'
  })
})

app.use('/api', routes);

export default app;