const obtenerInventarios = (req,res) =>{
    res.send ('Se obtuvo el inventario')
};

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