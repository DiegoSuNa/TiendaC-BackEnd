import express from 'express';
import inventarioRoutes from './routes/inventario';

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

inventarioRoutes(app);

app.get('/prueba/:id', async (req,res,next) =>{
    console.log('antes de la promesa')
    let x =10;
    const promesa = new Promise((resolve,reject)=>{
        if (x==10){
            resolve('la promesa se resuelve')
        }else{
            reject('No se cumple')
        }
    });

    await promesa.then((respuesta)=>{
        console.log(respuesta)
    }).catch(err=>{
        console.log(err)
    })

    console.log('despues de la promesa')
    res.status(200).send('Prueba Servidor')
})
app.listen(port, () => {
    return console.log(`Servidor corriendo en el puerto ${port}`)
})