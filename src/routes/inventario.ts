import { Router } from "express";
import { actualizarInventarios, agregarInventario, elminarInventarios, obtenerInventario,obtenerInventarios } from "../controllers/inventarioController";

const inventarioRoutes = (app) => {
    const router = Router();
    app.use('/', router);
    app.get ('/obtenerInventarios', obtenerInventarios);
    app.get ('/obtenerInventario/:id', obtenerInventario);
    app.post ('/agregarInventario', agregarInventario);
    app.put ('/actualizarInventario/:id', actualizarInventarios);
    app.delete ('/eliminarInventario/:id', elminarInventarios);
}

export default inventarioRoutes;