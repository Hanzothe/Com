const User = require("..//models/user-model");

module.exports = {
  index(req, res) {
    res.json({ message: "Hello, world!" });
  },
  create(req, res) {
    const { nome_usuario, email_usuario, telefone_usuario, tipo_usuario } =
      req.body;

    let data = {};

    let userfind = Usuario.findOne({ email_usuario });
    if (!userfind) {
      data = { nome_usuario, email_usuario, telefone_usuario, tipo_usuario };
    }
  },
};
