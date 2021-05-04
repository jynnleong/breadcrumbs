const express = require('express');
const FileSchema = require('./Schema');
const Path = require('./Path');
const cors = require('cors');
const mongoose = require('mongoose');
const {MongoClient} = require('mongodb');
require('dotenv').config();

const app = express();

let dirObjectArray = require('./IterateStructure');

mongoose.connect(process.env.CONNECT_URL, {useNewUrlParser: true, useUnifiedTopology: true,});


app.use(express.json());
app.use(cors({
    origin: process.env.CORS_ORIGIN,
}));

app.use('/path', Path);


app.get('/', (req,res) => {
    let name = [];
    dirObjectArray.forEach(async (obj, objIndex) => {
        try {
            const file = new FileSchema({
                name: obj.name,
                children: obj.children,
                type: obj.type,
            });

            await file.save();
            res.send("Connection good!");
        }catch(error){
            res.send(error.message);
        }
    });
});

app.listen(process.env.PORT, () => {
    console.log(`Listening at port ${process.env.PORT}`);

});