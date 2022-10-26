






const usuarios = require('./database/usuarios_digital_house/usuarios.json');

const removerUsuario = (idUser) => {
    let usuarioIndex = usuarios.findIndex((usuario) => usuario.Index == idUser)
    if (usuarioIndex > -1){
        usuarios.splice(usuarioIndex, 1)
    }

};
    removerUsuario(1);
    console.log(usuarios);
