const users = []

exports.listar = (req, res) => {
    res.json(users);
}

exports.criar = (req, res) => {
    
    const {name, password, email} = req.body;

    if(!name || !password || !email) {
        return res.status(400).json({ erro: "nome, email e senha são obrigatorios!"});
    }

    res.send()
} 