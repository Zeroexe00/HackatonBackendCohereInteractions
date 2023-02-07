import app from './app.js';
import env from './src/config/index.js';

const port = env.PORT || 3000;

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})
