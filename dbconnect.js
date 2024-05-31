const mongoose = require('mongoose')

const dbconnect = async() =>{
    try {
mongoose.connect(process.env.MONGODB_URI)
      console.log('database connected successfully')  
    } catch (error) {
        console.error(error)
    }
}

module.exports = dbconnect
