const users = []

exports.listar = (req, res) => {
    res.json(users);
}

exports.create = (req, res) => {
    
    const {name, password, email} = req.body;

    if(!name || !password || !email) {
        return res.status(400).json({ erro: "nome, email e senha são obrigatorios!"});
    }

    res.send("usuario criado!")
} 

exports.findById = (req, res) => {

    const { id } = req.params;
    const user = users.find(u => u.id === id);

    if(!user) {
        res.status(404).json({erro: "Usuario não encontrado!"});
    }

    res.json(user);

}

exports.delete = (req, res) => {

    const {id} = req.params;
    const index = users.findIndex(u => u.id === id);

    if (index === -1) {
        return res.status(404).json({erro: "usuario não encontrado!"})
    }

    users.splice(index, 1);

    res.json({message: "usuario deletado com sucesso!"});

}

exports.update = (req, res) => {

    const {id} = req.params;
    const {name, password, email} = req.body;

    const user = users.findById(id);

    if (!user) {
        return res.status(404).json({ erro: "Usuário não encontrado!" });
    }

    if (name) user.name = name;
    if (email) user.email = email;
    if (password) user.password = password;
  
    res.json({ mensagem: "Usuário atualizado!", user });

}