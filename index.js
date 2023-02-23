const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const router = require('./router/index');

const PORT = 8080;
const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors({
    credentials: true,
    origin: "http://localhost:3000",
}));
app.use('/api', router);

mongoose.connect('mongodb+srv://NikRych223:23235lolo@cluster0.2mrjf1d.mongodb.net/?retryWrites=true&w=majority')
    .then(console.log('DB is OK!'))
    .catch(e => console.log(e));


app.listen(PORT, () => console.log(`Server Starting in PORT: ${PORT}`));