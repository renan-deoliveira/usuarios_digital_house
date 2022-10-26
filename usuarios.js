const usuarios = require('./usuarios.json')

//Tarefa 2
console.log("tarefa 2 - Listar usuários acima de 18 anos\n")

const buscarMaiores = () => {
    console.log(usuarios.filter((usuario) => {
        return usuario.idade > 18
    }));
}
buscarMaiores()

//Tarefa 4
console.log("Tarefa 4 - Criar a função de adicionar um usuário\n")

const adicionarUsuario = (id, nome, idade, sexo, email, telefone) => {
    const user = { id, nome, idade, sexo, email, telefone };
    usuarios.push(user);
    return user;
};
console.log(adicionarUsuario())

//Tarefa 5
console.log("Tarefa 5 -  Criar a função de remover um usuário\n")

const removerUsuario = (idUser) => {
    let usuarioIndex = usuarios.findIndex((usuario) => usuario.Index == idUser)
    if (usuarioIndex > -1) {
        usuarios.splice(usuarioIndex, 1)
    }

};
removerUsuario(1);
console.log(usuarios);
