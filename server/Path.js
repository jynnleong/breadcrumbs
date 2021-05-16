const root = require('./test');
const express = require('express');
require('dotenv').config();

const dirObjectArray = require('./IterateStructure');

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
        let file;

        for( var key in dirObjectArray ){
            if(dirObjectArray[key].name === req.params.pathway){
                file = dirObjectArray[key];
            }
        }
        if(file !== null)
        {
            res.send(file);
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
