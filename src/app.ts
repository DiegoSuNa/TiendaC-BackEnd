import express from 'express';

const app = express();
const port = 3000;

app.get('/', (req,res) =>{
    res.send('Prueba Servidor')
})
app.listen(port, () => {
    return console.log(`Servidor corriendo en el puerto ${port}`)
})