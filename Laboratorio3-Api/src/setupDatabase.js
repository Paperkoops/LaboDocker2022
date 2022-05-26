
const mongoose = require('mongoose');

const databaseSetUp = async () => {
  const connected = await connectToDatabase();
  if (!connected) {
    process.exit(1);
  }
}

const connectToDatabase = async () =>{
  const connectionOptions = {
    
  };
  try {
    await mongoose.connect(`mongodb://myUser:myPassword@mongodb_host:27017/?authSource=admin&readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false`, connectionOptions);
    console.log('Connected to database');
    return true;
  } catch (error) {
    console.log('Error occured while connecting to database :c', error);
    return false;
  }
}

module.exports = {databaseSetUp ,connectToDatabase}
