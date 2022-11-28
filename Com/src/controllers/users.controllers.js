const Usuario = require("..//models/user-model");

module.exports = {
  index(req, res) {
    res.json({ message: "Hello, world from Controller Usuário" });
  },
  async create(req, res) {
    const { nome_usuario, email_usuario, telefone_usuario, tipo_usuario } =
      req.body;

    let data = {};

    let userfind = await Usuario.findOne({ email_usuario });
    if (!userfind) {
      data = { nome_usuario, email_usuario, telefone_usuario, tipo_usuario };
      userfind = await Usuario.create(data);
      return res.status(200).json(userfind);
    } else {
      return res.status(500).json(userfind);
    }
  },
};
