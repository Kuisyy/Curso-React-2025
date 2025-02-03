import mongoose from 'mongoose';

// Definir el esquema
const PokemonSchema = new mongoose.Schema({
    // Campos básicos
    name: { type: String, required: true }, 
    img: { type: String, required: true },

    // Estadísticas como un array de objetos
    stats: [
        {
            name: { type: String, required: true }, // Nombre de la estadística (ej: "hp")
            value: { type: Number, required: true } // Valor de la estadística (ej: 45)
        }
    ],

    types: { type: [String], required: true },

    isFav: { type: Boolean, default: false }
});

module.exports = mongoose.model('Pokemon', PokemonSchema);
