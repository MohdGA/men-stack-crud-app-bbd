const express = require('express');
const Business = require('../models/business');
const router = express.Router();
// everything in this file has /businesses front

router.get('/', async (req,res) => {
  const allBusinesses = await Business.find();
  console.log(allBusinesses)
  res.render('businesses/index.ejs',{
    allBusinesses
  });

});

// RENDER NEW BUSINESS FORM
router.get('/new',(req,res) => {
  res.render('businesses/new.ejs')
});

// POST FROM DATA TO DATABASE
router.post('/', async (req,res) => {
  if(req.body.isVerified === "on"){
    req.body.isVerified = true
  }else{
    req.body.isVerified = false;
  }
  // console.log(req.body)
  await Business.create(req.body)
  res.redirect('/businesses/')
})

// SHOW ONE BUSINESS
router.get('/:businessId', async (req,res) => {
 const foundBusiness = await Business.findById(req.params.businessId);
 res.render('businesses/show.ejs',{foundBusiness})
})

module.exports = router;