const fs = require('fs/promises');
const parse = require('csv-parse');
const { getDB } = require('../models');

const DATABASE = 'db';
const TABLE = 'myTable';

const createSchema = (db) => {

};

const seedFile = async (filePath) => {

};

const args = process.argv;
if (args.length !== 3) {
  console.log('usage: node models/seed.js <file in project root>');
  return;
}
