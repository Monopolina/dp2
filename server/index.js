const fastify = require("fastify")({ logger: true });
const mysql = require("mysql2");
const pool = mysql.createPool({
  connectionLimit: 5,
  host: "localhost",
  user: "pol",
  database: "monitori",
  password: "1234",
  dateStrings: true
});
global.pool = pool;

fastify.register(require('@fastify/cors'), {
  origin: true
})

fastify.route({
  method: 'GET',
  url: '/prodaja', 
  handler: (req, res) => {
    pool.query("SELECT * FROM prodaja", (err, result) => {
      if (err) { res.send(err) }
      else { res.send(result) }
    })
  },
})
fastify.route({
  method: 'GET',
  url: '/remont', 
  handler: (req, res) => {
    pool.query("SELECT * FROM remont", (err, result) => {
      if (err) { res.send(err) }
      else { res.send(result) }
    })
  },
})


fastify.route({
  method: 'POST',
  url: '/prodaja/create', 
  handler: (req, res) => {
        const params = [req.body.model, req.body.diagonal , req.body.razrech, req.body.ves, req.body.urkost, req.body.kontrasnost, req.body.garanti, req.body.cena, req.body.rassrochka];
        pool.query("INSERT INTO prodaja (model, diagonal, razrech, ves, urkost, kontrasnost, garanti, cena, rassrochka) VALUES (?,?,?,?,?,?,?,?,?)", params, (err, result) => {
        if (err) { res.send(err) }
        else { res.send(result) }
      })
    }
 })
 fastify.route({
  method: 'POST',
  url: '/remont/create', 
  handler: (req, res) => {
        const params = [req.body.model, req.body.diagonal , req.body.razrech, req.body.ves, req.body.urkost, req.body.kontrasnost, req.body.garanti, req.body.cena, req.body.vremyaremont];
        pool.query("INSERT INTO remont (model, diagonal, razrech, ves, urkost, kontrasnost, garanti, cena, vremyaremont) VALUES (?,?,?,?,?,?,?,?,?)", params, (err, result) => {
        if (err) { res.send(err) }
        else { res.send(result) }
      })
    }
 })


fastify.route({
  method: 'GET',
  url: '/prodaja/delete/:id',
  handler: (req, res) => {
    pool.query("DELETE FROM prodaja WHERE id=?", [req.params.id], (err, result) => {
      if (err) { res.send(err) }
      else { res.send(result) }
    })
  },
})
fastify.route({
  method: 'GET',
  url: '/remont/delete/:id',
  handler: (req, res) => {
    pool.query("DELETE FROM remont WHERE id=?", [req.params.id], (err, result) => {
      if (err) { res.send(err) }
      else { res.send(result) }
    })
  },
})


fastify.route({
  method: 'GET',
  url: '/prodaja/:id', 
  handler: (req, res) => {
    pool.query("SELECT * FROM prodaja WHERE id=?", [req.params.id], (err, result) => {
      if (err) { res.send(err) }
      else { res.send(result[0]) }
    })
  },
})
fastify.route({
  method: 'GET',
  url: '/remont/:id', 
  handler: (req, res) => {
    pool.query("SELECT * FROM remont WHERE id=?", [req.params.id], (err, result) => {
      if (err) { res.send(err) }
      else { res.send(result[0]) }
    })
  },
})


fastify.route({
  method: 'POST',
  url: '/prodaja/edit', 
  handler: (req, res) => {
    const params = [req.body.model, req.body.diagonal , req.body.razrech, req.body.ves, req.body.urkost, req.body.kontrasnost, req.body.garanti, req.body.cena, req.body.rassrochka, req.body.id];
      pool.query("UPDATE prodaja SET model=?, diagonal=?, razrech=?, ves=?, urkost=?, kontrasnost=?, garanti=?, cena=?, rassrochka=? WHERE id=?", params, (err, result) => {
      if (err) { res.send(err) }
      else { res.send(result) }
    })
  }
})
fastify.route({
  method: 'POST',
  url: '/remont/edit', 
  handler: (req, res) => {
    const params = [req.body.model, req.body.diagonal , req.body.razrech, req.body.ves, req.body.urkost, req.body.kontrasnost, req.body.garanti, req.body.cena, req.body.vremyaremont, req.body.id];
      pool.query("UPDATE remont SET model=?, diagonal=?, razrech=?, ves=?, urkost=?, kontrasnost=?, garanti=?, cena=?, vremyaremont=? WHERE id=?", params, (err, result) => {
      if (err) { res.send(err) }
      else { res.send(result) }
    })
  }
})


fastify.listen({ port: 3000, host: '0.0.0.0' }, err => {
  if (err) throw err
})