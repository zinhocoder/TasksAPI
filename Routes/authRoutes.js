const express = require('express');
const { register, login } = require('../Controllers/authController');
const router = express.Router();

/**
 * @swagger
 * /api/auth/register:
 *   post:
 *     summary: Registrar um novo usuário
 *     description: Registrar um novo usuário fornecendo nome de usuário, e-mail e senha.
 *     consumes:
 *       - application/json
 *     parameters:
 *       - in: body
 *         name: user
 *         description: Dados de registro do usuário
 *         required: true
 *         schema:
 *           type: object
 *           required:
 *             - username
 *             - email
 *             - password
 *           properties:
 *             username:
 *               type: string
 *               example: joao_silva
 *             email:
 *               type: string
 *               example: joao.silva@exemplo.com
 *             password:
 *               type: string
 *               example: senha123
 *     responses:
 *       201:
 *         description: Usuário registrado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 *                   example: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwZjhhZGIyM2EzNmEzYTgwZjA1ZTQ5ZTBhNzk5YjFiOGFkZDA4MGEyYmUwZjI4MjE0N2JlMjM2ZmRkIiwiaWF0IjoxNjEyMzQ3MjM5fQ.-MyJWkNYbTQOUO5hvVuHZzS-DJlQOtpiT4nWs6TIc4Y"
 *       400:
 *         description: O usuário já existe
 *       500:
 *         description: Erro no servidor
 */
router.post('/register', register);

/**
 * @swagger
 * /api/auth/login:
 *   post:
 *     summary: Fazer login de um usuário existente
 *     description: Fazer login de um usuário existente fornecendo e-mail e senha.
 *     consumes:
 *       - application/json
 *     parameters:
 *       - in: body
 *         name: user
 *         description: Dados de login do usuário
 *         required: true
 *         schema:
 *           type: object
 *           required:
 *             - email
 *             - password
 *           properties:
 *             email:
 *               type: string
 *               example: joao.silva@exemplo.com
 *             password:
 *               type: string
 *               example: senha123
 *     responses:
 *       200:
 *         description: Login bem-sucedido
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 *                   example: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwZjhhZGIyM2EzNmEzYTgwZjA1ZTQ5ZTBhNzk5YjFiOGFkZDA4MGEyYmUwZjI4MjE0N2JlMjM2ZmRkIiwiaWF0IjoxNjEyMzQ3MjM5fQ.-MyJWkNYbTQOUO5hvVuHZzS-DJlQOtpiT4nWs6TIc4Y"
 *       400:
 *         description: Credenciais inválidas
 *       500:
 *         description: Erro no servidor
 */
router.post('/login', login);

module.exports = router;
