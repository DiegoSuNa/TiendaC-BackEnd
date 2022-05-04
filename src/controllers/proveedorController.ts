import executeQuery from "../services/mysql.service";

const obtenerProveedores = async (req, res, next) => {
    await executeQuery('SELECT * FROM proveedor').then(response => {
        const data = {
            message: `${response.length} datos encontrados`,
            data: response.length > 0 ? response : null
        };
        res.json(data);
    }).catch(error => {
        next(error)
    })
};

const obtenerProveedor = async (req, res, next) => {
    const { id } = req.params;
    try {
        const response = await executeQuery(`SELECT * FROM proveedor WHERE idProveedor = ${id}`);
        const data = {
            message: `${response.length} datos encontrados`,
            data: response.length > 0 ? response[0] : null
        };
        res.json(data);
    } catch (error) {
        next(error)
    }
};

const agregarProveedor = async (req, res, next) => {
    const { nom_Tienda, nom_Prod_Prov, tipo_Prod_Prov, cant_Prod_Unid_Prov, cant_Prod_Six_Prov, uni_Med_Prod_Prov, precio_Prov, fech_Entr } = req.body;
    try {
        const { nom_Tienda, nom_Prod_Prov, tipo_Prod_Prov, cant_Prod_Unid_Prov, cant_Prod_Six_Prov, uni_Med_Prod_Prov, precio_Prov, fech_Entr } = req.body
        const response = await executeQuery(`INSERT INTO inventario (nom_Tienda, nom_Prod_Prov, tipo_Prod_Prov, cant_Prod_Unid_Prov, cant_Prod_Six_Prov, uni_Med_Prod_Prov, precio_Prov, fech_Entr) VALUES ('${nom_Tienda}','${nom_Prod_Prov}',${tipo_Prod_Prov},${cant_Prod_Unid_Prov},'${cant_Prod_Six_Prov}',${uni_Med_Prod_Prov},${precio_Prov},'${fech_Entr}')`);
        

        res.status(201).json({ message: 'created', id: response.insertId });
    } catch (error) {
        next(error)
    }
};

const actualizarProveedor = (req,res,next) =>{
    const {nom_Tienda, nom_Prod_Prov, tipo_Prod_Prov, cant_Prod_Unid_Prov, cant_Prod_Six_Prov, uni_Med_Prod_Prov, precio_Prov, fech_Entr} = req.body;
    const {id} = req.params;
    executeQuery(`UPDATE proveedor SET nom_Tienda = '${nom_Tienda}', nom_Prod_Prov = '${nom_Prod_Prov}', tipo_Prod_Prov = ${tipo_Prod_Prov}, cant_Prod_Unid_Prov = ${cant_Prod_Unid_Prov}, cant_Prod_Six_Prov = '${cant_Prod_Six_Prov}', uni_Med_Prod_Prov = ${uni_Med_Prod_Prov}, precio_Prov = '${precio_Prov}, fech_Entr = '${fech_Entr}' WHERE idProveedor = '${id}'`).then((response) =>{

        res.json({message: response.affectedRows > 0 ? 'updated' : `No existe registro con id: ${req.params.id}`});
    }).catch((error) => {
        next(error)
    });
};

const eliminarProveedor = (req,res,next) =>{
    executeQuery(`DELETE FROM proveedor WHERE idProveedor = '${req.params.id}'`).then((response) => {
        res.json({message: response.affectedRows > 0 ? 'deleted' : `No existe registro con id: ${req.params.id}`});
    }).catch((error) => {
        next(error)
    });
};


export { obtenerProveedores, obtenerProveedor, agregarProveedor, actualizarProveedor, eliminarProveedor };