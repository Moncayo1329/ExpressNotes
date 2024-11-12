const express = require('express') 
const path = require('path');
const app = express()

const PORT = process.env.PORT ?? 1234 

app.use(express.static('./public'))


app.get('/',(req,res)=> {
res.sendFile(path.resolve(__dirname,'./index.html'))

})

app.all('*',(req,res)=> {

res.status(404).send('resource not found')

})


app.listen(PORT, () => {
    console.log('Server listening on port http://localhost:1234');
});