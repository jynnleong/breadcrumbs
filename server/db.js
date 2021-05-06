require('dotenv').config();

const mongoose = require('mongoose');

module.exports = async function() {

    try{
        const conn = await mongoose.connect(process.env.CONNECT_URL,{
            useUnifiedTopology:true,
            useNewUrlParser: true
        })
        console.log(`mongo database is connected!!!`);
    }catch(error){
        console.error(`Error: ${error} `)
        process.exit(1)
    }

}

