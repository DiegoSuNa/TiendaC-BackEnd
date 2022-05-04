import express from 'express';
import inventarioRoutes from './routes/inventario';
import ventasRoutes from './routes/venta';


import errorHandler from './middleware/erros';
import config from './config/config';



const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

inventarioRoutes(app);
ventasRoutes(app);


app.use(errorHandler);

app.get('/prueba/:id', async (req,res,next) =>{
    res.status(200).send('OK')
});


app.listen(config.PORT, () => {
    return console.log(`Servidor corriendo en el puerto ${config.PORT}`)
});