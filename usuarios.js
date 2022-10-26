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