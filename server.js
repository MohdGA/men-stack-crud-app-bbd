const express = require('express');
const app = express();
const port = 3001;
const path = require('path');


// MiddLEWARE
// to connect public folder
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req,res) => {
  res.render('index.ejs');
})

app.listen(port), () => {
  console.log("SERVER IS WORKING");
}