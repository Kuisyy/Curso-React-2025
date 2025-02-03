const express = require('express');
const router = express.Router();
const Pokemon = require('../models/Pokemon');

// Obtener todos los Pokémon
router.get('/pokemons', async (req, res) => {
    const pokemons = await Pokemon.find();
    res.json(pokemons);
});

// Agregar un nuevo Pokémon
router.post('/pokemons', async (req, res) => {
    const nuevoPokemon = new Pokemon(req.body);
    await nuevoPokemon.save();
    res.json(nuevoPokemon);
});

// Actualizar un Pokémon
router.put('/pokemons/:id', async (req, res) => {
    const pokemonActualizado = await Pokemon.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(pokemonActualizado);
});

//Añadir o quitar de favs
router.put('/pokemons/:id/favorite', async (req, res) => {
    try {
        const pokemon = await Pokemon.findById(req.params.id);
        if (!pokemon) {
            return res.status(404).json({ message: "Pokémon no encontrado" });
        }

        pokemon.isFav = !pokemon.isFav;
        await pokemon.save();

        res.json({ message: "Estado de favorito actualizado", pokemon });
    } catch (error) {
        res.status(500).json({ message: "Error al actualizar favorito", error });
    }
});

// Eliminar un Pokémon
router.delete('/pokemons/:id', async (req, res) => {
    await Pokemon.findByIdAndDelete(req.params.id);
    res.json({ mensaje: "Pokémon eliminado" });
});

module.exports = router;
