const Sequelize = require('sequelize');
require('dotenv').config();

let sequelize;

if (process.env.DATABASE_URL) {
    sequelize = new Sequelize(process.env.DATABASE_URL, {
      dialect: 'postgres',
      protocol: 'postgres',
      logging: true,
      ssl: true,
    });
  } else {
    sequelize = new Sequelize(
      process.env.DB_NAME,
      process.env.DB_USER,
      process.env.DB_PASSWORD,
      {
        host: 'ec2-54-234-13-16.compute-1.amazonaws.com',
        dialect: 'postgres',
        port: 5432,
        password: 'd64d8ec10b015f043a745dc79974d682f57453dce9740ee6e1398edcffc8bc6c',
      }
    );
  }
  
  module.exports = sequelize;