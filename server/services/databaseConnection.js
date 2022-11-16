const mongoose = require('mongoose');

const pswd = 'nyYh07noGXr6qGHG'
const database = 'cluster0'
const username = 'alsa'

const connectDB = () =>{
    mongoose.connect(`mongodb+srv://${username}:${pswd}@${database}.rmyqys5.mongodb.net/?retryWrites=true&w=majority`).then( () =>{
        console.log(`💿 Database -> 
        ✅ The database has been connected ;)`)
    }).catch(e =>{
        console.error(`💿 Database ->
    ❌ Error connecting the database! :(
        ${e}`)

        console.log(`💿 Database -> 
        retry after 5 seconds`)
        setTimeout(connectDB, 5000)
    })
}

module.exports = connectDB