const Usuario = require("../models/user-model");

module.exports = {
  async index(req, res) {
    const user = await Usuario.find();
    res.json(user);
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
  async details(req, res) {
    const { _id } = req.params;
    const user = await Usuario.findOne({ _id });
    res.json(user);
  },
};
