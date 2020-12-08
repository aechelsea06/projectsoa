var express = require('express');
var router = express.Router();
const db = require('../db/database');

router.get('/global',async function(req, res, next) {
    const result = await db.getdata();
    console.log(result.rows);
    res.render('global', { global: result.rows });
  });

  router.get('/',async function(req, res, next) {
    const result = await db.getdata();
    console.log(result.rows);
    res.render('index', { index: result.rows });
  });

  router.get('/thailand',async function(req, res, next) {
    const result = await db.getth();
    console.log(result.rows);
    res.render('thailand', { thailand: result.rows });
  });

  router.get('/protect',async function(req, res, next) {
    const result = await db.getdata();
    console.log(result.rows);
    res.render('protect', { protect: result.rows });
  });

  router.get('/map',async function(req, res, next) {
    const result = await db.getmap();
    console.log(result.rows);
    res.render('map', { maps: result.rows });
  });

module.exports = router;