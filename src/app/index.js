import express from 'express';

const app = express();

app.get('/*', (req, res) => {
  res.send('Yup! Everything seems to work nicely!');
});

export default app;
