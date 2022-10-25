const usuarios = require('./usuarios.json')
const buscarMaiores = () => {
    console.log(usuarios.filter((usuario) => {
        return usuario.idade > 18
    }));
}
buscarMaiores()