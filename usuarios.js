const usuarios = require('./usuarios.json')

//Tarefa 2
console.log("tarefa 2 - Listar usuários acima de 18 anos\n")

const buscarMaiores = () => {
    console.log(usuarios.filter((usuario) => {
        return usuario.idade > 18
    }));
}
buscarMaiores()

//Tarefa 3
console.log("Tarefa 3 - Criar a função de listar todos os usuários inserindo mais uma informação para cada de ativo: true\n")

const adicionarStatus = () => {
    usuarios.forEach((user) => usuarios.ativo = true)
}
adicionarStatus()

console.log(usuarios)

//Tarefa 4
console.log("Tarefa 4 - Criar a função de adicionar um usuário\n")

const adicionarUsuario = (user) => {
    const { id, nome, idade, sexo, email, telefone } = user;
    usuarios.push(user);
    return adicionarUsuario;
};
adicionarUsuario({
    id: 7,
    nome: "Cristian",
    idade: 19,
    sexo: "masculino",
    email: "exemplo@email.com",
    telefone: "9999-9999"
})
console.log(usuarios)

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
