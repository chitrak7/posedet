import express from 'express';
import * as posedet from './controllers/posedet.js'
const app = express()

app.use(express.json())

app.get('/', (req, res) => {
  return res.status(200).send({'message': 'Posenet api'});
})
app.get('/getsim/*', posedet.getsim);
app.listen(3000)
console.log('app running on port ', 3000);
