import { Router } from "express";
import { actualizarProducto, agregarProducto, eliminarProducto, obtenerProducto,obtenerInventarios } from "../controllers/inventarioController";

const inventarioRoutes = (app) => {
    const router = Router();
    app.use('/', router);
    app.get ('/obtenerInventarios', obtenerInventarios);
    app.get ('/obtenerProducto/:id', obtenerProducto);
    app.post ('/agregarProducto', agregarProducto);
    app.put ('/actualizarProducto/:id', actualizarProducto);
    app.delete ('/eliminarProducto/:id', eliminarProducto);
}

export default inventarioRoutes;