import executeQuery from "../services/mysql.service";

const obtenerInventarios = async (req, res, next) => {
    await executeQuery('SELECT * FROM inventario').then(response => {
        const data = {
            message: `${response.length} datos encontrados`,
            data: response.length > 0 ? response : null
        };
        res.json(data);
    }).catch(error => {
        next(error)
    })
};

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

const agregarProducto = async (req, res, next) => {
    const { nom_Prod, tipo_Prod, cant_Prod_Unid, cant_Prod_Six, uni_Med_Prod, precio, fech_Venc} = req.body;
    try {
        const { nom_Prod, tipo_Prod, cant_Prod_Unid, cant_Prod_Six, uni_Med_Prod, precio, fech_Venc } = req.body
        const response = await executeQuery(`INSERT INTO inventario (nom_Prod, tipo_Prod, cant_Prod_Unid, cant_Prod_Six, uni_Med_Prod, precio, fech_Venc) VALUES ('${nom_Prod}','${tipo_Prod}',${cant_Prod_Unid},${cant_Prod_Six},'${uni_Med_Prod}',${precio},'${fech_Venc}')`);
        

        res.status(201).json({ message: 'created', id: response.insertId });
    } catch (error) {
        next(error)
    }
};

const actualizarProducto = (req,res,next) =>{
    const {nom_Prod, tipo_Prod, cant_Prod_Unid, cant_Prod_Six, uni_Med_Prod, precio, fech_Venc} = req.body;
    const {id} = req.params;
    executeQuery(`UPDATE inventario SET nom_Prod = '${nom_Prod}', tipo_Prod = '${tipo_Prod}', cant_Prod_Unid = ${cant_Prod_Unid}, cant_Prod_Six = ${cant_Prod_Six}, uni_Med_Prod = '${uni_Med_Prod}', precio = ${precio}, fech_Venc = '${fech_Venc}' WHERE idInventario = '${id}'`).then((response) =>{

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


export { obtenerInventarios, obtenerProducto, agregarProducto, actualizarProducto, eliminarProducto };