const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const helmet = require('helmet');
const multer = require('multer');  // If you've added file upload functionality
const passport = require('passport');  // For authentication
const Sequelize = require('sequelize');

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('combined'));
app.use(helmet());

// If you're planning to serve dynamic HTML using EJS
app.set('view engine', 'ejs');

// Sequelize Setup
const sequelize = new Sequelize('postgres', 'postgres', 'GoodPassword123!', {
    host: 'database-1.ckoy9j5rf7xp.us-east-2.rds.amazonaws.com',
    dialect: 'postgres',
    logging: false
});

sequelize.authenticate()
    .then(() => {
        console.log('Connection to the database has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

// Example endpoint to ensure server is running
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`);
});
