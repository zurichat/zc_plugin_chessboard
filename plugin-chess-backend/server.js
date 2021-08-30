const express = require('express') 
const path = require('path') 

const app = express()

const PORT = 5005

app.use(express.static(path.join(__dirname, '../plugin-chess-frontend/build')))

app.get('/', (req, res) => {
    res.send('Welcome to the chessboard plugin app!')
})

app.listen(PORT, () => {
    console.log(`Chessboard server is running on port: ${PORT}`)
})