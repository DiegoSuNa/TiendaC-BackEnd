import executeQuery from "../services/mysql.service";

const obtenerInventarios = async(req,res,next) =>{
    await executeQuery('SELECT * FROM invetario').then(response =>{
        const data = {
            message: `${response.length} datos encontrados`,
            data: response.length > 0 ? response : null
        };
        res.json(data);
    }).catch(error => {
        next(error)
    })
}

const obtenerInventario = (req,res) =>{
    res.send('Se obtuvo un producto')
};
const agregarInventario = (req,res) =>{
    res.send('Se agrego un producto en el inventario')
};
const actualizarInventarios = (req,res) =>{
    res.send('Se actualizo un producto en el inventario')
};
const elminarInventarios = (req,res) =>{
    res.send('Se elimino un producto en el inventario')
};


export{obtenerInventarios,obtenerInventario,agregarInventario,actualizarInventarios,elminarInventarios};