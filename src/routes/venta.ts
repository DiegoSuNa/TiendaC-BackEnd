import { Router }from "express";
import { obtenerProducto, actualizarProducto, eliminarProducto } from "../controllers/ventaController";


const ventasRoutes = (app) => {
    const router = Router();
    app.use('/', router);
    app.get ('/obtenerProducto/:id', obtenerProducto);
    app.put ('/actualizarProducto/:id', actualizarProducto);
    app.delete ('/eliminarProducto/:id', eliminarProducto);
}

export default ventasRoutes;