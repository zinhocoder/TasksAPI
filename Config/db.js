const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const dbURI = `mongodb://localhost:27017/?authSource=T`;
    await mongoose.connect(dbURI, {
    });
    console.log('MongoDB conectado com sucesso');
  } catch (err) {
    console.error('Erro ao conectar ao MongoDB:', err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
