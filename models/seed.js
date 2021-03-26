const fs = require('fs/promises');
const parse = require('csv-parse');
const { getDB } = require('../models');

const DATABASE = 'db';
const TABLE = 'myTable';

// Form MySQL statements to create database and tables here.
// Please be mindful about using keywords and reserved words
const createSchema = (db) => {

};

const seedFile = async (filePath) => {

};

const args = process.argv;
if (args.length !== 3) {
  console.log('usage: node models/seed.js <file in project root>');
  return;
}
