require('dotenv').config();
const express = require('express');
const Path = require('./Path');
const cors = require('cors');
const app = express();

let dirObjectArray = require('./IterateStructure');


app.use(express.json());
app.use(cors({
    origin: process.env.CORS_ORIGIN,
}));

app.use('/path', Path);


app.get('/', (req,res) => {
    res.send(dirObjectArray);
});

app.listen(process.env.PORT, () => {
    console.log(`Listening at port ${process.env.PORT}`);

});