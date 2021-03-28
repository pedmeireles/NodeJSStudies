const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

// /admin/add-user => GET
router.get('/add-user', (req, res, next) => {
  res.sendFile(path.join(rootDir, 'views', 'add-user.html'));
});

// /admin/add-user => POST
router.post('/add-user', (req, res, next) => {
  console.log(req.body);
  res.redirect('/');
});

module.exports = router;
