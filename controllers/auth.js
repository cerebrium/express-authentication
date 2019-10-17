const express = require('express');
const router = express.Router();
const db = require('../models')

router.get('/signup', function(req, res) {
  res.render('auth/signup');
});

router.post(`/signup`, function(req, res) {
  // find or create user
  db.user.findOrCreate({
    where : {
      email: req.body.email
    }, 
    defaults: {
      name : req.body.name,
      password: req.body.password
    }
  }).then(function([user, created]){
    created ? res.redirect('/') : res.redirect('/auth/signup');
  }).catch(function(err) {
    console.log(err)
    res.redirect('/auth/signup')
  })
  // if user existed err and redirect to signup
})

router.get('/login', function(req, res) {
  res.render('auth/login');
});

module.exports = router;
