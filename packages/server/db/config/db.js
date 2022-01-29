module.exports = {
  development: {
    username: 'postgres',
    password: process.env.DB_PASSWORD,
    database: 'superheroes2021',
    host: '127.0.0.1',
    port: process.env.PORT,
    dialect: 'postgres',
  },
};
