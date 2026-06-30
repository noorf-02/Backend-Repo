const mongoose = require('mongoose');

function dbConnection(){
    mongoose.connect(process.env.URL).then(()=>{
        console.log('THE DB IS CONNECTED')
    }).catch(err=>{
        console.log('DB IS NOT CONNECTED')
    })
}

module.exports = dbConnection;

// we use mongoose in db connection 
// also use a then and catch error handler
// export the function in server and call it 