const express = require('express');
const mongoose = require('mongoose');
const router = require('./router/index');

const PORT = 8080;
const app = express();

app.use(express.json());
app.use('/api', router);

const start = () => {
    try {
        app.listen(PORT, async () => {
            await mongoose.connect('mongodb+srv://NikRych223:23235lolo@cluster0.2mrjf1d.mongodb.net/?retryWrites=true&w=majority')
                .then(console.log('DB is OK!'))
                .catch(e => console.log(e));

            console.log(`Server Starting in PORT: ${PORT}`);
        });
    } catch(e) {}
}

start();