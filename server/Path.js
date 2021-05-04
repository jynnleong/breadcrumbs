const root = require('./test');
const express = require('express');
const FileSchema = require('./Schema');
const mongoose = require('mongoose');
require('dotenv').config();


const router = express.Router();

router.get('/', async (req,res) => {
    try{
        res.json(root);
    }catch(error)
    {
        res.send({message: error.message});
    }
});

router.get('/:pathway', async(req,res) => {
    try{
        const fileSchema = await FileSchema.findOne({name: `${req.params.pathway}`});
        if(fileSchema !== null)
        {
            res.json(fileSchema);
        }
        else
        {
            res.json({message: "Bad pathway request. Check for spelling"});
        }
    }catch(error){
        res.send(error.message)
    }
});


module.exports = router;
