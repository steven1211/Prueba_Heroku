const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PersonSchema= new Schema(
    {
      identificacion: String,
      nombre: String,
      apellido1: String,
      apellido2: String,
      estado: Boolean,
      telefono: String,
      correo: String,
      direccion: {
          pais: String,
          provincia: String,
          canton:String,
          distrito: String
      }   
    }
);

module.exports = mongoose.model("Person", PersonSchema);