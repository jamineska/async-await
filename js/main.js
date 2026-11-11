//cogendo elementos
const usuario = document.querySelector("#datosUsuario");
const boton = document.querySelector(".boton button");
const info = document.querySelector(".informacion");


//creamos variable
const infoDatos = [
    {
        nombre: "Camila", email: "camilaP@mipaginaweb.com",
}];


//poniendo los segundos y la promesa
const getUsuario = (nombre) => {
    const usuario = infoDatos.find((user) => user.nombre === nombre)
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Retrasado por 1 segundo.');
            if (usuario) {
                resolve(usuario);
            } else{ reject(`No hay usuario con este dato ${nombre} no existe`);
        }
        }, "1000");        
    });
};

//probando boton y resuelva promesa
boton.addEventListener("click", function (event) {
    const usuario = "Camilaparker"
    getUsuario(usuario)
        .then((usuario) => {
            pintarUsuario(usuario.nombre, usuario.email)
        })
        .catch((error) => {
            info.textContent = error;
        });
}
);

//activando async
boton.addEventListener("click", async function (event){
    const usuarioBuscar = 'Camila';

    try{
        const usuarioResult = await getUsuario(usuarioBuscar);
    //si caso salga bien:
        pintarUsuario(usuarioResult.nombre, usuarioResult.email);

    } catch (error) {
        //caso la promesa sea rechazada:
        info.textContent= error;
    }
});



// async function prueba() { }
const usuarioNombre = async () => {
    const nombre = 'Camila'
    if (nombre === 'Camila') {
        return nombre
    }
    throw 'ususario no encontrado'
}

const usuarioEmail = async () => {
    console.log('usuarioNombre')
    const email = 'camilaP@mipaginaweb.com'
    if (email === 'camilaP@mipaginaweb.com') {
        return email
    }
    throw 'email equivocado'
}


const pintarUsuario = (nombre, email)=> {
info.textContent =`El usuario ${nombre} con el email ${email}`
}
