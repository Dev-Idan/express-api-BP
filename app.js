
const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
require('dotenv').config();

const { notFound, errorHandler } = require('./middlewares');
const routes = require('./routes');

const app = express();


// Middlewares
app.use(morgan('tiny'));
app.use(helmet());
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({
    message: 'Hello Express API'
  });
});

// API Routes
app.use('/api', routes);

// Error Handlers
app.use(notFound);
app.use(errorHandler);


const port = process.env.PORT || 3000;

app.listen(port, console.log(`Listening: http://localhost:${port}`));