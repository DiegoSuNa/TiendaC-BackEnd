import { Router } from "express";
import { actualizarProveedor, agregarProveedor, eliminarProveedor, obtenerProveedor, obtenerProveedores } from "../controllers/proveedorController";

const proveedorRoutes = (app) => {
    const router = Router();
    app.use('/', router);
    app.get ('/obtenerProveedores', obtenerProveedores);
    app.get ('/obtenerProveedor/:id', obtenerProveedor);
    app.post ('/agregarProveedor', agregarProveedor);
    app.put ('/actualizarProveedor/:id', actualizarProveedor);
    app.delete ('/eliminarProveedor/:id', eliminarProveedor);
}

export default proveedorRoutes;