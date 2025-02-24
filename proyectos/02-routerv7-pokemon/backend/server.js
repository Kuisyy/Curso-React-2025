const mongoose = require('mongoose');

const uri = 'mongodb://admin:password@localhost:27017/pokemons?authSource=admin';

mongoose.connect(uri)
  .then(() => console.log('✅ Conectado a MongoDB'))
  .catch(err => console.error('❌ Error al conectar:', err));
