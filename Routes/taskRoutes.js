const express = require('express');
const { createTask, getTasks, updateTask, deleteTask } = require('../Controllers/taskController');
const router = express.Router();

/**
 * @swagger
 * /api/tasks:
 *   get:
 *     summary: Lista todas as tarefas
 *     description: Retorna uma lista de todas as tarefas no sistema
 *     responses:
 *       200:
 *         description: Lista de tarefas
 */
router.get('/', getTasks);

/**
 * @swagger
 * /api/tasks:
 *   post:
 *     summary: Cria uma nova tarefa
 *     description: Cria uma nova tarefa no sistema
 *     parameters:
 *       - in: body
 *         name: task
 *         description: Dados da tarefa a ser criada
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *             title:
 *               type: string
 *               example: 'Nova tarefa'
 *             description:
 *               type: string
 *               example: 'Detalhes da nova tarefa'
 *     responses:
 *       201:
 *         description: Tarefa criada com sucesso
 *       500:
 *         description: Erro no servidor
 */
router.post('/', createTask);

/**
 * @swagger
 * /api/tasks/{id}:
 *   put:
 *     summary: Atualiza uma tarefa existente
 *     description: Atualiza os detalhes de uma tarefa específica
 *     parameters:
 *       - in: path
 *         name: id
 *         description: ID da tarefa a ser atualizada
 *         required: true
 *         type: string
 *       - in: body
 *         name: task
 *         description: Dados da tarefa a ser atualizada
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *             title:
 *               type: string
 *               example: 'Tarefa atualizada'
 *             description:
 *               type: string
 *               example: 'Descrição atualizada da tarefa'
 *     responses:
 *       200:
 *         description: Tarefa atualizada com sucesso
 *       400:
 *         description: Tarefa não encontrada
 *       500:
 *         description: Erro no servidor
 */
router.put('/:id', updateTask);

/**
 * @swagger
 * /api/tasks/{id}:
 *   delete:
 *     summary: Exclui uma tarefa
 *     description: Exclui uma tarefa específica
 *     parameters:
 *       - in: path
 *         name: id
 *         description: ID da tarefa a ser excluída
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: Tarefa excluída com sucesso
 *       400:
 *         description: Tarefa não encontrada
 *       500:
 *         description: Erro no servidor
 */
router.delete('/:id', deleteTask);

module.exports = router;
