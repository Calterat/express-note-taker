const express = require('express');
const htmlRoutes = require('./routes/htmlRoutes');
const apiRoutes = require('./routes/apiRoutes');

const app = express();
const PORT = process.env.PORT || 3001;

// use all assests in the public folder for use with the htmlRoutes
app.use(express.static('public'));
// parse incoming string or array data
app.use(express.urlencoded({ extended: true }));
// parse incoming JSON data
app.use(express.json());
// uses the router on the html distributor
app.use('/', htmlRoutes);
// uses the router on the api distributor
app.use('/api', apiRoutes);


app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
})