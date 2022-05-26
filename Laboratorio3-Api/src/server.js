//import { databaseSetUp } from './setupDatabase.js';
const { startServer } = require('./index');
const { databaseSetUp } = require('./setupDatabase')

async function init() {

  await startServer();
  await databaseSetUp();
  console.log("everything working");
}
init();
