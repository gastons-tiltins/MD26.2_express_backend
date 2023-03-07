import express from 'express';
import {Request, Response} from 'express';
import bodyparser from 'body-parser';
import cors from 'cors';
import mongoConnect from './dbcon';
import Animals from './schema';

const app = express();

app.use(bodyparser.json());
app.use(cors({origin: '*'}));

mongoConnect();

app.get('/', (req: Request, res: Response) => {
  res.send('Application works!');
});

type Filter = {
  category?: 'Cat' | 'Dog';
};

app.get('/animals', (req: Request, res: Response) => {
  console.log(req.query);

  const filter: Filter = {};

  if (req.query.catsOnly === 'true') {
    filter.category = 'Cat';
  }

  Animals.find(filter)
    .then((data) => res.json(data))
    .catch((err) => res.send(err));
});

app.post('/animals', (req: Request, res: Response) => {
  const animalBody = req.body;
  Animals.create(animalBody)
    .then((data) => res.json(data))
    .catch((err) => res.send(err));
});

app.delete('/animals/:id', (req, res) => {
  const animalId = req.params.id;
  Animals.deleteOne({_id: animalId})
    .then(() => res.json('Record deleted.'))
    .catch((err) => res.send(err));
});

app.listen(3004, () => {
  console.log('Application started on port 3004!');
});
