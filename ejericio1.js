app.get('/' , (req,res) => {
 
    res.send('<h1>Mi pagina web wow </h1>')
    res.status(200).send('home page')
})

app.get('/about',(req,res) => {

res.status(200).send('About page')
})

app.all('*',(req,res)=>{
res.status(404).send('<h1>resource not found </h1>')

})