import express from 'express';
import bodyParser from 'body-parser';
import logger from 'morgan';
import path from 'path';
import routes from './routes/index';

const app = express();


app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// app.use('/app', express.static(path.join(__dirname, 'public'))); /* for external css or js */

app.use('/api/v1', routes);

app.use('/App', express.static(path.join(__dirname, '../client'))); /* external js and css */
// SERVE STATIC FILES
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/index.html'));
});

export default app;
