const mongoose = require('mongoose');





mongoose.connect('mongodb+srv://nandanith7563:amrQ2kxvptQsaLl9@cluster0.ksefrdm.mongodb.net/?retryWrites=true&w=majority');

const db = mongoose.connection;
db.on('error', (error) => {if(error){
    console.log(error);
}})
db.once('open', function(){
    console.log('database connected to the server successfully!');
});

module.exports = db;