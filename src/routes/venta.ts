import { Router }from "express";
import { actualizarProducto } from "../controllers/inventarioController";
import { obtenerProductoVenta, actualizarProductoVenta, eliminarProductoVenta } from "../controllers/ventaController";


const ventasRoutes = (app) => {
    const router = Router();
    app.use('/', router);
    app.get ('/obtenerProducto/:id', obtenerProductoVenta);
    app.put ('/actualizarProducto/:id', actualizarProductoVenta);
    app.delete ('/eliminarProducto/:id', eliminarProductoVenta);
}

export default ventasRoutes;