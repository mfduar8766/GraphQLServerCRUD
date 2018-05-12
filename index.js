import express from 'express';
import mongoose from 'mongoose';
import graphqlHTTP from 'express-graphql';
import schema from './schema';

mongoose.connect(`mongodb://mfduar8766:password@ds133964.mlab.com:33964/graphql-api`);
mongoose.connection.once('open', () => console.log('Connected to DB'));

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.json({msg: 'Welcom to App.'});
});

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}));

app.listen(port, () => {
  console.log(`Server is listening on PORT ${port}`);
});



