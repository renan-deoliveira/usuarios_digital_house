<<<<<<< HEAD

=======
const usuarios = require('./usuarios.json')
const buscarMaiores = () => {
    console.log(usuarios.filter((usuario) => {
        return usuario.idade > 18
    }));
}
buscarMaiores()

const adicionarUsuario = (id,nome,idade,sexo,email,telefone) => {
    const user = {id,nome,idade,sexo,email,telefone};
    usuarios.push(user);
    return user;
    };
    console.log(adicionarUsuario())
>>>>>>> 8b7758bf0b8a69fe139dbbef15b380831a8dd4a3

const usuarios = require('./usuarios.json');

const removerUsuario = (idUser) => {
    let usuarioIndex = usuarios.findIndex((usuario) => usuario.Index == idUser)
    if (usuarioIndex > -1){
        usuarios.splice(usuarioIndex, 1)
    }

};
    removerUsuario(1);
    console.log(usuarios);
    