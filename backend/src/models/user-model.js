const mongoose = require("mongoose");

const DataSchema = new mongoose.Schema(
  {
    nome_usuario: String,
    email_usuario: String,
    telefone_usuario: String,
    tipo_usuario: { type: Number, default: 1 },
  },
  {
    timestamps: true,
  }
);

const usuarios = mongoose.model("Usuarios", DataSchema);
module.exports = usuarios;
