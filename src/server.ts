import express from 'express';
import {Request, Response} from 'express';
import bodyparser from 'body-parser';
import cors from 'cors';
import mongoConnect from './dbcon';
import Jokes from './schema';

const app = express();

app.use(bodyparser.json());
app.use(cors({origin: '*'}));

mongoConnect();

app.get('/', (req: Request, res: Response) => {
  res.send('Application works!');
});

app.get('/jokes', (req: Request, res: Response) => {
  Jokes.find()
    .then((data) => res.json(data))
    .catch((err) => res.send(err));
});

app.post('/jokes', (req: Request, res: Response) => {
  const jokesBody = req.body;
  Jokes.create(jokesBody)
    .then((data) => res.json(data))
    .catch((err) => res.send(err));
});

app.delete('/jokes/:id', (req, res) => {
  const jokeId = req.params.id;
  Jokes.deleteOne({_id: jokeId})
    .then(() => res.json('Record deleted.'))
    .catch((err) => res.send(err));
});

app.listen(3004, () => {
  console.log('Application started on port 3004!');
});
