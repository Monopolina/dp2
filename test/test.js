const mysql = require('mysql2');
const { expect } = require('chai');

describe('MySQL Connection Pool', () => {
  let pool;

  before(() => {
    pool = mysql.createPool({
      connectionLimit: 5,
      host: "localhost",
      user: "pol",
      database: "dp",
      password: "1234",
      dateStrings: true
    });
    global.pool = pool;
  });

  after(() => {
    pool.end();
  });

  it('should acquire a connection from the pool', (done) => {
    pool.getConnection((err, connection) => {
      expect(err).to.be.null;
      expect(connection).to.exist;
      expect(connection).to.be.an('object');
      expect(connection).to.have.property('release');
      connection.release();
      done();
    });
  });
});