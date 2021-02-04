const express = require('express');
const path = require('path');
require('dotenv').config()
const getRouter = require('../routes/getRoutes')

const app = express()
const port = process.env.PORT

// Set views
const viewsPath = path.join(__dirname, '../views')
app.set('views', viewsPath)
app.set('view engine', 'ejs')

// Static folder
const publicDirectoryPath = path.join(__dirname, '../public')
app.use(express.static(publicDirectoryPath))
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(getRouter)
app.set('Content-Type', 'application/json')

app.listen(port, () => {
    console.log(`Server is up on port ${port}`);
})

