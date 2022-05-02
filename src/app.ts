import express from 'express';
import inventarioRoutes from './routes/inventario';



import errorHandler from './middleware/erros';
import config from './config/config';


const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

inventarioRoutes(app);


app.use(errorHandler);

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


app.listen(config.PORT, () => {
    return console.log(`Servidor corriendo en el puerto ${config.PORT}`)
})