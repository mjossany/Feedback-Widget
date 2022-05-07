import express from 'express';
import cors from 'cors';
import { routes } from './routes';
import bodyParser from 'body-parser';

const app = express();

app.use(cors())
app.use(bodyParser.json({ limit: '3mb' }));
app.use(routes);

app.listen(process.env.PORT || 3333, () => {
  console.log('HTTP server running!');
});