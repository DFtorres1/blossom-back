import dotenv from 'dotenv';
import app from './app';
import graphqlHandler from './graphql';

dotenv.config();

const PORT = process.env.PORT || 4000;

app.all('/graphql', graphqlHandler);

app.get('/', async (_, res) => {
  res
    .status(200)
    .json({ message: 'Connection has been established successfully.' });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
