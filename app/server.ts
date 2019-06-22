import express from 'express';
import path from 'path';

const app = express();
const port = process.env.PORT || 1234;

app.use(express.static(path.resolve('dist')));

app.get('/api/v1/post/:postId', (req, res) => {
  const { params } = req;
  const { postId } = params;

  console.info('GET post: ', postId);
  res.sendStatus(200);
});

app.listen(port, () => {
  console.info(`Server has been started at port ${port}`);
});
