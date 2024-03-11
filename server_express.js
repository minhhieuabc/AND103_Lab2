const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('<h1 style="color: red;">HTML5 - Nội dung 1</h1>')
})

app.get('/home', (req, res) => {
    console.log("Vào trang chủ");
    res.send('<h1>Trang chủ</h1>') 
})

app.get('/contact', (req, res) => {
    console.log("Vào trang liên hệ");
    res.send('<h1>Liên hệ</h1>')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})