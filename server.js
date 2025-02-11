const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./Config/db');
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

dotenv.config();

const app = express();
app.use(express.json()); 


connectDB();


const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: 'TasksAPI',
      description: 'API para gerenciamento de tarefas',
      version: '1.0.0',
      contact: {
        name: 'Roberto Gonçalves',
        email: 'roberto.goncalves2003@hotmail.com',
      },
    },
    servers: [
      {
        url: `http://localhost:${process.env.PORT || 5000}`,
      },
    ],
  },
  apis: ['./Routes/*.js', './Controllers/*.js'],
};

const swaggerDocs = swaggerJsdoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Rotas
const authRoutes = require('./Routes/authRoutes');
const taskRoutes = require('./Routes/taskRoutes');
app.use('/api/auth', authRoutes);
app.use('/api/tasks', taskRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`TasksAPI running on port ${PORT}`));
