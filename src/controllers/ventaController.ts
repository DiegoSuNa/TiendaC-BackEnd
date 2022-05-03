import executeQuery from "../services/mysql.service";

const obtenerProducto = async (req, res, next) => {
    const { id } = req.params;
    try {
        const response = await executeQuery(`SELECT * FROM inventario WHERE idInvetario = ${id}`);
        const data = {
            message: `${response.length} datos encontrados`,
            data: response.length > 0 ? response[0] : null
        };
        res.json(data);
    } catch (error) {
        next(error)
    }
};

const actualizarProducto = (req,res,next) =>{
    const {cant_Prod_Unid, cant_Prod_Six, fech_Venta} = req.body;
    const {id} = req.params;
    executeQuery(`UPDATE inventario SET cant_Prod_Unid = ${cant_Prod_Unid}, cant_Prod_Six = ${cant_Prod_Six}, fech_Venta = '${fech_Venta}' WHERE idInventario = '${id}'`).then((response) =>{

        res.json({message: response.affectedRows > 0 ? 'updated' : `No existe registro con id: ${req.params.id}`});
    }).catch((error) => {
        next(error)
    });
};

const eliminarProducto = (req,res,next) =>{
    executeQuery(`DELETE FROM inventario WHERE idInventario = '${req.params.id}'`).then((response) => {
        res.json({message: response.affectedRows > 0 ? 'deleted' : `No existe registro con id: ${req.params.id}`});
    }).catch((error) => {
        next(error)
    });
};

export { obtenerProducto, actualizarProducto, eliminarProducto };